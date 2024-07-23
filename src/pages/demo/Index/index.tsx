import { useMemo, } from 'react';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhTable, useHhSearch } from '@haohan/hooks';
import { objToFlat, dateToDatestr } from '@haohan/utils';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';
import getColumn from './config/column';
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




  const column = useMemo(() => getColumn({ startRetrieveData:()=>startRetrieveData(getList)}), []);

  return (
    <div>
      <HhTitleRow autoTitle title='部位定义' />

      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setSearchData}
      />

      <HhTable
        tableProps={{ isLoading }}
        hasSet
        dataSource={dataSource}
        column={column}
        pageIndex={pageIndex}
        onLoadMore={onLoadMore}
        total={total}
        onLoadAll={onLoadAll}
      />

     
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
