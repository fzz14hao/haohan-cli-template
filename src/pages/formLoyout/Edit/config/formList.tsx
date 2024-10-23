import { Input, InputNumber } from 'antd';
import { HhGroupSearch, HhStatusTag, SearchFactory } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';
import { FactoryGetPageListByParmNoPermission } from '@/services/BasicInfo/Factory';

const getFormList = (props?: any) => {
  let { formData, setFieldsValue, isDisableForm } = props;

  const data = [
    {
      key: 1,
      name: 'factoryCode',
      label: i18next.t('工厂'),
      props: {
        rules: [{ required: true, message: i18next.t('请选择工厂') }],
      },
      render: () => {
        return (
          <HhGroupSearch
            set={setFieldsValue}
            data={formData}
            disabled={isDisableForm}
            nameKey="factoryName"
            codeKey="factoryCode"
            idKey="factoryId"
            getDataConfig={{
              fun: FactoryGetPageListByParmNoPermission,
              keyToKey: {
                factoryCode: 'ftyCode',
                factoryName: 'factoryName',
                factoryId: 'id',
              },
            }}
            Component={SearchFactory}
          />
        );
      },
    },
    {
      key: 3,
      label: i18next.t('状态'),
      name: 'status',
      render: (value: any) => {
        return (
          <HhStatusTag
            status={formData?.status}
            configData={[
              {
                text: i18next.t('已分摊'),
                color: 'blue',
                statusCode: 1,
              },
              {
                text: i18next.t('未分摊'),
                color: 'red',
                statusCode: 0,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },

    {
      key: 6,
      label: i18next.t('成本金额'),
      name: 'extCost',
      props: {
        rules: [{ required: true, message: i18next.t('请输入成本金额') }],
      },
      render: () => {
        return <InputNumber disabled={isDisableForm} min={0} />;
      },
    },

    {
      key: 8,
      label: i18next.t('分配金额'),
      name: 'amtCost',
      render: () => {
        return <Input />;
      },
    },
    {
      key: 9,
      label: i18next.t('创建时间'),
      name: 'timeCreated',
      render: () => {
        return <Input disabled />;
      },
    },
    {
      key: 10,
      label: i18next.t('创建人'),
      name: 'userIdCreated',
      render: () => {
        return <Input disabled />;
      },
    },
  ];
  return data;
};

export default getFormList;
