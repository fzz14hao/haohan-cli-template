import { useMemo, useState } from 'react';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhTable, useHhSearch, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import { ComponentDelete } from '@/services/Mos/Component';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';

import getColumn from './config/column';
import AddModal from './components/AddModal';
import Search from './components/Search';

const DemoIndex = () => {
  const { runRequest, isLoading } = useHhRequest();

  const {
    dataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
    isLoading: isTableLoading,
    total,
    getTableData,
    onTableDelete,
    startRetrieveData,
  } = useHhTable<any[]>({ initData: [] });

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
    const params: API.QueryParamDto = {
      pageIndex,
      pageSize,
      keyword,
      ...searchData,
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
    onTableDelete({ record: { id: id }, deleteFn: ComponentDelete, index });
  };

  const column = useMemo(() => getColumn({ onEdit, onDel }), []);

  return (
    <div>
      <HhTitleRow autoTitle title={i18next.t('列表弹窗添加')} />

      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setSearchData}
        onAdd={onAdd}
        isLoading={isLoading || isTableLoading}
      />

      <HhTable
        tableProps={{ isLoading: isLoading || isTableLoading }}
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
