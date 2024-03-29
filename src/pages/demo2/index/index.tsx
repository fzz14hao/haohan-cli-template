import { history } from 'umi';
import { HhKeepAlive, HhTable, HhTitleRow, HhSearchBar } from '@haohan/ui';
import { useHhRequest, useHhSearch, useHhTable } from '@haohan/hooks';

import i18next from '@haohan/utils/es/hhI18next';
import getColumn from './config/column';
import { Button, message } from 'antd';
import {
  CostSharingCancelCostExpense,
  CostSharingCostExpense,
  CostSharingDelete,
  CostSharingGetListPage,
} from '@/services/Fi/CostSharing';
import { useMemo } from 'react';

const CostExpense = () => {
  const { runRequest } = useHhRequest();

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
  } = useHhTable<API.CostSharingDto>({ initData: [] });

  const { keyword, onSearch } = useHhSearch<any>({
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
    };

    getTableData<API.CostSharingDtoListApiResult, API.CostSharingDto[]>(
      CostSharingGetListPage(params),
    );
  }

  const onCostExpense = (id: string) => {
    runRequest<API.BooleanApiResult, boolean>(
      CostSharingCostExpense({ id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('分摊成功');
        getList();
      }
    });
  };
  const onCancelExpense = (id: string) => {
    runRequest<API.BooleanApiResult, boolean>(
      CostSharingCancelCostExpense({ id }, { showMsg: true }),
    ).then((res) => {
      if (res) {
        message.success('取消成功');
        getList();
      }
    });
  };

  // 点击编辑
  const onEdit = (value: any, record: any) => {
    history.push(`/demo2/edit/${record.id}`);
  };

  // 点击删除
  const onDel = (value: any, record: any, index: number) => {
    onTableDelete({
      record: { ids: [record.id] },
      deleteFn: CostSharingDelete,
      index,
    });
  };

  const column = useMemo(() => getColumn({ onEdit, onDel, onCostExpense, onCancelExpense }), []);

  return (
    <div>
      <HhTitleRow autoTitle title={'成本分摊'} />
      <HhSearchBar
        placeholder={i18next.tt('请输入')}
        onSearch={onSearch}
        value={keyword}
        renderRight={
          <>
            <Button
              type="primary"
              onClick={() => {
                history.push('/demo2/edit/0');
              }}
            >
              {i18next.t('新建')}
            </Button>
          </>
        }
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
    </div>
  );
};

export default () => (
  <HhKeepAlive>
    <CostExpense />
  </HhKeepAlive>
);
