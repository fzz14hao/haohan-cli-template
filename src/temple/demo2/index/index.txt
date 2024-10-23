import { history } from 'umi';
import { HhKeepAlive, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhRequest, useHhSearch, useHhTable } from '@haohan/hooks';
import i18next from '@haohan/utils/es/hhI18next';
import getColumn from './config/column';
import { CostSharingDelete, CostSharingGetListPage } from '@/services/Fi/CostSharing';
import { useMemo } from 'react';
import Search from './components/Search';

const Index = () => {
  const { runRequest, isLoading } = useHhRequest();

  const {
    dataSource,
    addDataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
    isLoading: isTableLoading,
    total,
    getTableData,
  } = useHhTable<API.CostSharingDto>({ initData: [] });

  const { keyword, onSearch, searchData, setSearchData } = useHhSearch<any>({
    callback: getList,
    pageIndex,
    setPageIndex,
    pageSize,
    isLoading,
  });

  function getList() {
    const params: API.CostExpenseCondition = {
      pageIndex,
      pageSize,
      keyword,
      ...searchData,
    };

    getTableData<API.CostSharingDtoListApiResult, API.CostSharingDto[]>(
      CostSharingGetListPage(params),
    ).then((res) => {
      addDataSource(res);
    });
  }

  // 点击编辑
  const onEdit = (value: any, record: any) => {
    history.push(`/demo2/edit/${record.id}`);
  };

  const onAdd = () => {
    history.push(`/demo2/edit/0`);
  };

  const column = useMemo(() => getColumn({ onEdit, removeIndex }), []);

  return (
    <div>
      <HhTitleRow autoTitle title={i18next.t('列表')} />
      <Search
        onSearch={onSearch}
        keyword={keyword}
        setAllSearchValue={setSearchData}
        onAdd={onAdd}
        isLoading={isLoading}
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
    </div>
  );
};

export default () => (
  <HhKeepAlive>
    <Index />
  </HhKeepAlive>
);
