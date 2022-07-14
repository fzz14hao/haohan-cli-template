import { history } from 'umi';
import { HhKeepAlive, HhTable, HhTitleRow, SearchBar } from '@haohan/ui';
import { useDataSource, useOnSearch, useAsync } from '@haohan/hooks';
import { onDelete } from '@haohan/utils';

import i18next from 'i18next';
import getColumn from './config/column';
import { Button, message } from 'antd';
import {
  CostSharingCancelCostExpense,
  CostSharingCostExpense,
  CostSharingDelete,
  CostSharingGetListPage,
} from '@/services/Fi/CostSharing';

const CostExpense = () => {
  const { isLoading, total, runSync } = useAsync();

  const {
    dataSource,
    addDataSource,
    setDataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
  } = useDataSource<API.CostSharingDto>([], total);

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

  function getList() {
    const params: API.CostExpenseCondition = {
      pageIndex,
      pageSize,
      // keyword,
    };

    runSync<API.CostSharingDtoListApiResult, API.CostSharingDto[]>(
      CostSharingGetListPage(params),
    ).then((res) => {
      if (res) {
        addDataSource(res);
      } else {
        setDataSource([]);
      }
    });
  }

  const onCostExpense = (id: string) => {
    runSync<API.BooleanApiResult, boolean>(CostSharingCostExpense({ id }, { showMsg: true })).then(
      (res) => {
        if (res) {
          message.success('分摊成功');
          getList();
        }
      },
    );
  };
  const onCancelExpense = (id: string) => {
    runSync<API.BooleanApiResult, boolean>(
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
    onDelete(value, { ids: [record.id] }, index, CostSharingDelete, removeIndex, getList);
  };

  const column = getColumn({ onEdit, onDel, onCostExpense, onCancelExpense });

  return (
    <div>
      <HhTitleRow autoTitle title={i18next.t('成本分摊')} />
      <SearchBar
        placeholder={i18next.t('请输入')}
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
