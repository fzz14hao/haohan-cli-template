import { UnitGetPageListByParm } from '@/services/BasicInfo/Unit';
import { Input, Select } from 'antd';
import { SerachUnit, HhGroupSearch } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';

const getFormList = (props?: any) => {
  const { formData, setFieldsValue } = props;

  const data = [
    {
      key: 2,
      label: i18next.t('工单号'),
      name: 'prodOrderNo',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部件编码') }],
      },
      render: () => {
        return <Input />;
      },
    },
    {
      key: 3,
      label: i18next.t('单价'),
      name: 'price',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部名称') }],
      },
      render: () => {
        return <Input />;
      },
    },
  ];
  return data;
};

export default getFormList;
