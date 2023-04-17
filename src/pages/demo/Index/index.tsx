import { useMemo, useState } from 'react';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhTable, useHhSearch } from '@haohan/hooks';
import { objToFlat, dateToDatestr } from '@haohan/utils';
import i18next from '@haohan/utils/es/hhI18next';
import { ComponentDelete } from '@/services/Mos/Component';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';

import getColumn from './config/column';
import AddModal from './components/AddModal';
import Search from './components/Search';

const DemoIndex = () => {
  const {
    dataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
    isLoading,
    total,
    getTableData,
    onTableDelete,
    startRetrieveData
  } = useHhTable<API.ComponentDto>({ initData: [] });

  const [visible, setVisible] = useState<boolean>(false);
  const [rowData, setRowData] = useState<API.ComponentDesignBaseDto>();
  const { keyword, searchData, setSearchData, onSearch } = useHhSearch<any>({
    callback: getList,
    pageIndex,
    setPageIndex,
    pageSize,
    isLoading,
  });

  // 获取列表
  function getList() {
    let newData = objToFlat(searchData, ['createTime'], [], {
      createTime: ['startTime', 'endTime'],
    });

    newData = dateToDatestr(newData, ['startTime', 'endTime']);
    const params: API.QueryParamDto = {
      pageIndex,
      pageSize,
      keyword,
      ...searchData,
      ...newData,
    };
    getTableData<API.ComponentDesignBaseDtoListApiResult, API.CompoQueryParamDto[]>(
      ComponentDesignBaseGetPageListByParm(params),
    );
  }

  // 点击编辑
  const onEdit = (value: any, record: any, index: number) => {
    setRowData(record);
    setVisible(true);
  };

  // 点击新增
  const onAdd = () => {
    setRowData({});
    setVisible(true);
  };

  // 点击删除
  const onDel = (value: any, record: any, index: number) => {
    const { id } = record;
    onTableDelete({ record: { id: id }, deleteFn: ComponentDelete, index, removeIndex });
  };

  const column = useMemo(() => getColumn({ onEdit, onDel }), []);

  return (
    <div>
      <HhTitleRow autoTitle title='部位定义' />

      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setSearchData}
        onAdd={onAdd}
      />

      <HhTable
        tableProps={{ isLoading }}
        hasSet={true}
        dataSource={dataSource}
        column={column}
        pageIndex={pageIndex}
        onLoadMore={onLoadMore}
        total={total}
        onLoadAll={onLoadAll}
      />

      {visible && (
        <AddModal
          rowData={rowData}
          setVisible={setVisible}
          onOk={startRetrieveData}
          visible={visible}
        />
      )}
    </div>
  );
};

export default () => {
  return (
    <HhKeepAlive>
      <DemoIndex></DemoIndex>
    </HhKeepAlive>
  );
};
