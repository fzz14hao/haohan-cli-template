import { useCallback, useMemo, useState } from 'react';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useDataSource, useOnSearch, useAsync } from '@haohan/hooks';
import { onDelete, objToFlat, dateToDatestr } from '@haohan/utils';
import i18next from 'i18next';

import { ComponentDelete } from '@/services/Mos/Component';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';

import getColumn from './config/column';
import AddModal from './components/AddModal';
import Search from './components/Search';

const DemoIndex = () => {
  const { isLoading, total, runSync } = useAsync();
  const {
    dataSource,
    setDataSource,
    addDataSource,
    removeIndex,
    updatedIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
  } = useDataSource<API.ComponentDto>([], total);
  const [allSearchValue, setAllSearchValue] = useState<API.QueryParamDto>({});
  const [visible, setVisible] = useState<boolean>(false);
  const [rowData, setRowData] = useState<API.ComponentDesignBaseDto>();
  const { keyword, onSearch } = useOnSearch<string>(
    () => {
      getList();
    },
    pageIndex,
    setPageIndex,
    pageSize,
    isLoading,
    false,
  );

  // 获取列表
  function getList() {
    let newData = objToFlat(allSearchValue, ['createTime'], [], {
      createTime: ['startTime', 'endTime'],
    });

    newData = dateToDatestr(newData, ['startTime', 'endTime']);
    const params: API.QueryParamDto = {
      pageIndex,
      pageSize,
      keyword,
      ...newData,
    };
    runSync<API.ComponentDesignBaseDtoListApiResult, API.CompoQueryParamDto[]>(
      ComponentDesignBaseGetPageListByParm(params),
    ).then((res) => {
      if (res) {
        addDataSource(res);
      } else {
        setDataSource([]);
      }
    });
  }

  // 点击编辑
  const onEdit =(value: any, record: any, index: number) => {
    setRowData(record);
    setVisible(true);
  }

  // 点击新增
  const onAdd = () => {
    setRowData({});
    setVisible(true);
  };

  // 点击删除
  const onDel = (value: any, record: any, index: number) => {
    const { id } = record;
    onDelete(value, { id: id }, index, ComponentDelete, removeIndex);
  };

  const column = useMemo(()=>getColumn({ onEdit, onDel }),[]);

  return (
    <div>
      <HhTitleRow autoTitle title={i18next.t('部位定义')} />

      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setAllSearchValue}
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
        <AddModal rowData={rowData} setVisible={setVisible} onOk={getList} visible={visible} />
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
