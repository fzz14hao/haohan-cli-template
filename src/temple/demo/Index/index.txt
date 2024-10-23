import { useMemo, useState } from 'react';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhTable, useHhSearch, useHhRequest } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';

import getColumn from './config/column';
import Search from './components/Search';

const DemoIndex = () => {
  const { runRequest, isLoading } = useHhRequest();

  // 初始化表格数据
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
    startRetrieveData,
  } = useHhTable<any[]>({ initData: [] });

  //初始化搜索
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

  //获取表格列配置
  const column = useMemo(
    () => getColumn({ addCallBack: () => startRetrieveData(getList), removeIndex }),
    [],
  );

  return (
    <>
      <HhTitleRow autoTitle title={i18next.t('列表弹窗添加')} />

      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setSearchData}
        isLoading={isLoading || isTableLoading}
        addCallBack={() => startRetrieveData(getList)}
      />

      <HhTable
        tableProps={{ isLoading: isLoading || isTableLoading }}
        hasSet
        dataSource={dataSource}
        column={column}
        pageIndex={pageIndex}
        onLoadMore={onLoadMore}
        total={total}
        onLoadAll={onLoadAll}
      />
    </>
  );
};

export default () => {
  return (
    <HhKeepAlive>
      <DemoIndex></DemoIndex>
    </HhKeepAlive>
  );
};
