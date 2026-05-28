import { useMemo } from 'react';
import { HhKeepAlive, HhPageFlexColumn, HhProSearch, HhTable, HhTitleRow } from '@haohan/ui';
import { useHhTable, useHhProSearch } from '@haohan/hooks';
import { ComponentDesignBaseGetPageListByParm } from '@/services/Mos/ComponentDesignBase';
import getColumn from './config/columns';
import i18next from '@haohan/utils/es/hhI18next';
import getSearchItems from './config/searchItems';
import { Button } from 'antd';
import { history } from 'umi';

const initialValues = {};
const DemoIndex = () => {
  const {
    dataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    setPageSize,
    onLoadMore,
    onLoadAll,
    isLoading,
    total,
    getTableData,
    startRetrieveData,
  } = useHhTable<API.ComponentDto>({ initData: [] });

  const { actions, proSearchForm, proSearchData, proSearchDataRef } = useHhProSearch({
    initialValues,
  });

  // 获取列表函数
  const getList = async (queryParams?: any) => {
    const params = {
      pageIndex,
      pageSize,
      ...proSearchDataRef.current,
      ...queryParams,
    };
    //ComponentDesignBaseGetPageListByParm是获取数据的接口，如果用户指定了换成用户的接口
    getTableData(ComponentDesignBaseGetPageListByParm(params));
  };

  const onClickAdd = () => {
    history.push('/demo2/edit/0');
  };

  const columns = useMemo(
    () => getColumn({ startRetrieveData: () => startRetrieveData(getList) }),
    [],
  );

  const searchItems = useMemo(
    () => getSearchItems({ proSearchData, actions }),
    [proSearchData, actions],
  );

  return (
    <HhPageFlexColumn>
      {/* 固定布局wrapper */}
      {/* 标题 */}
      <HhTitleRow autoTitle title={i18next.tEn('$HH125c.demo.Demo$HH')} />

      {/* 搜索 */}
      <HhProSearch
        actions={actions}
        form={proSearchForm}
        queryRequest={getList}
        searchItems={searchItems}
        keywordPlaceholder={i18next.t(
          '$HHac5c.pleaseEnterOrderNumber/customerOrderNumber.请输入订单编号/客户订单号$HH',
        )}
        pageSize={pageSize}
        pageIndex={pageIndex}
        setPageSize={setPageSize}
        setPageIndex={setPageIndex}
      >
        <>
          {/* 更多操作按钮区域 */}
          {/* 添加 按钮 点击跳转到编辑页面 */}
          <Button type="primary" onClick={onClickAdd}>
            {i18next.tEn('$HHvdfc.Add.Add$HH')}
          </Button>
        </>
      </HhProSearch>

      {/* 表格区域 */}
      <HhTable
        tableProps={{ isLoading }}
        hasSet={true}
        dataSource={dataSource}
        column={columns}
        pageIndex={pageIndex}
        onLoadMore={onLoadMore}
        total={total}
        onLoadAll={onLoadAll}
      />
    </HhPageFlexColumn>
  );
};

export default () => {
  return (
    <HhKeepAlive>
      <DemoIndex></DemoIndex>
    </HhKeepAlive>
  );
};
