import { Input, InputNumber } from 'antd';
import {
  HhGroupSearch,
  HhSearchInput,
  HhStatusTag,
  SearchCurrency,
  SearchDepartment,
  SearchFactory,
  SearchCostCenter,
  SearchCostItem,
} from '@haohan/ui';
import i18n from 'i18next';
import { FactoryGetPageListByParmNoPermission } from '@/services/BasicInfo/Factory';
import { CostCenterGetListPage } from '@/services/Fi/CostCenter';
import { DepartmentGetPageListByParm } from '@/services/BasicInfo/Department';
import { CostItemGetPageListByParm } from '@/services/Mos/CostItem';
import { CurrencyGetCurrenciesNoPermission } from '@/services/BasicInfo/Currency';

const getFormList = (props?: any) => {
  let { basicInfo, setData, isEdit, setVisibleArPeriod } = props;

  const data = [
    {
      key: 1,
      name: 'factoryCode',
      label: i18n.t('工厂'),
      props: {
        rules: [{ required: true, message: i18n.t('请选择工厂') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            set={setData}
            data={basicInfo}
            disabled={isEdit}
            nameKey="factoryName"
            codeKey="factoryCode"
            idKey="factoryId"
            clearKey={[
              'costCenterName',
              'costCenterCode',
              'costCenterId',
              'periodYear',
              'periodMonth',
              'periodId',
              'costItemCode',
              'costItemName',
              'costItemId',
              'departmentName',
              'departmentCode',
              'departmentId',
            ]}
            getDataConfig={{
              fun: FactoryGetPageListByParmNoPermission,
              keyToKey: {
                factoryCode: 'ftyCode',
                factoryName: 'factoryName',
                factoryId: 'id',
                currencyName: 'localCurrencyName',
                currencyCode: 'localCurrencyCode',
                currencyId: 'localCurrencyId',
              },
            }}
            Component={SearchFactory}
          />
        );
      },
    },
    {
      key: 2,
      label: i18n.t('成本中心'),
      name: 'costCenterCode',
      props: {
        rules: [{ required: true, message: i18n.t('请选择成本中心') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            disabled={isEdit || !basicInfo?.factoryId}
            nameKey={'costCenterName'}
            codeKey={'costCenterCode'}
            idKey="costCenterId"
            data={basicInfo}
            set={setData}
            getDataConfig={{
              fun: CostCenterGetListPage,
              keyToKey: {
                costCenterName: 'code',
                costCenterCode: 'name',
                costCenterId: 'id',
              },
              params: {
                factoryId: basicInfo?.factoryId,
              },
            }}
            ComponentProps={{ otherParam: { factoryId: basicInfo?.factoryId } }}
            Component={SearchCostCenter}
          />
        );
      },
    },
    {
      key: 3,
      label: i18n.t('状态'),
      name: 'status',
      default: true,
      render: (value: any) => {
        return (
          <HhStatusTag
            status={basicInfo?.status}
            configData={[
              {
                text: i18n.t('已分摊'),
                color: 'blue',
                statusCode: 1,
              },
              {
                text: i18n.t('未分摊'),
                color: 'red',
                statusCode: 0,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },

    {
      key: 4,
      label: i18n.t('账期'),
      name: 'financialDate',
      props: {
        rules: [{ required: true, message: i18n.t('请选择账期') }],
      },
      render: () => {
        return (
          <HhSearchInput
            readOnly
            disabled={isEdit || !basicInfo?.factoryId}
            onSearch={() => setVisibleArPeriod(true)}
            allowClear
          ></HhSearchInput>
        );
      },
    },
    {
      key: 5,
      label: i18n.t('成本代码'),
      name: 'costItemCode',
      props: {
        rules: [{ required: true, message: i18n.t('请选择成本代码') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            disabled={isEdit || !basicInfo?.factoryId}
            nameKey={'costItemName'}
            codeKey={'costItemCode'}
            idKey="costItemId"
            data={basicInfo}
            set={setData}
            getDataConfig={{
              fun: CostItemGetPageListByParm,
              keyToKey: {
                costItemCode: 'costCode',
                costItemName: 'description',
                costItemId: 'id',
              },
              params: {
                factoryId: basicInfo?.factoryId,
              },
            }}
            ComponentProps={{ otherParam: { factoryId: basicInfo?.factoryId } }}
            Component={SearchCostItem}
          />
        );
      },
    },

    {
      key: 6,
      label: i18n.t('成本金额'),
      name: 'extCost',
      props: {
        rules: [{ required: true, message: i18n.t('请输入成本金额') }],
      },
      render: () => {
        return <InputNumber disabled={isEdit} min={0} />;
      },
    },
    {
      key: 6.5,
      label: i18n.t('部门'),
      name: 'departmentCode',
      props: {
        rules: [{ required: true, message: i18n.t('请选择部门') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            disabled={isEdit || !basicInfo?.factoryId}
            nameKey={'departmentName'}
            codeKey={'departmentCode'}
            idKey="departmentId"
            data={basicInfo}
            set={setData}
            getDataConfig={{
              fun: DepartmentGetPageListByParm,
              keyToKey: {
                departmentName: 'name',
                departmentCode: 'code',
                departmentId: 'id',
              },
              params: {
                factoryId: basicInfo?.factoryId,
              },
            }}
            ComponentProps={{ otherParam: { factoryId: basicInfo?.factoryId } }}
            Component={SearchDepartment}
          />
        );
      },
    },
    {
      key: 7,
      label: i18n.t('货币'),
      name: 'currencyCode',
      props: {
        rules: [{ required: true, message: i18n.t('请选择货币') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            disabled={isEdit}
            nameKey={'currencyName'}
            codeKey={'currencyCode'}
            idKey="currencyId"
            data={basicInfo}
            set={setData}
            getDataConfig={{
              fun: CurrencyGetCurrenciesNoPermission,
              keyToKey: {
                currencyName: 'crName',
                currencyCode: 'crCode',
                currencyId: 'id',
              },
            }}
            Component={SearchCurrency}
          />
        );
      },
    },

    {
      key: 8,
      label: i18n.t('分配金额'),
      name: 'amtCost',
      render: () => {
        return <Input disabled />;
      },
    },
    {
      key: 9,
      label: i18n.t('创建时间'),
      name: 'timeCreated',
      render: () => {
        return <Input disabled />;
      },
    },
    {
      key: 10,
      label: i18n.t('创建人'),
      name: 'userIdCreated',
      render: () => {
        return <Input disabled />;
      },
    },
    {
      key: 11,
      label: i18n.t('分摊时间'),
      name: 'postedDate',
      render: () => {
        return <Input disabled />;
      },
    },
    {
      key: 12,
      label: i18n.t('分摊人'),
      name: 'postedUser',
      render: () => {
        return <Input disabled />;
      },
    },
  ];
  return data;
};

export default getFormList;
