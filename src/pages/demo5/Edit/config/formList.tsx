import { UnitGetPageListByParm } from '@/services/BasicInfo/Unit';
import { Input, Select } from 'antd';
import { SerachUnit, HhGroupSearch } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';

const getFormList = (props?: any) => {
  const { formData, setFieldsValue, isDisableForm } = props;

  const data = [
    {
      key: 2,
      label: i18next.t('部位编号'),
      name: 'componentCode',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部件编码') }],
      },
      render: () => {
        return <Input disabled={isDisableForm} />;
      },
    },
    {
      key: 3,
      label: i18next.t('部位名称'),
      name: 'componentName',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部名称') }],
      },
      render: () => {
        return <Input disabled={isDisableForm} />;
      },
    },
    {
      key: 4,
      label: i18next.t('分类'),
      name: 'className',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部件类别') }],
      },
      render: (value: any) => {
        return (
          <Select>
            <Select.Option key={'FA'} value={'FA'}>
              FA
            </Select.Option>
            <Select.Option key={'TR'} value={'TR'}>
              TR
            </Select.Option>
          </Select>
        );
      },
    },

    {
      key: 8,
      name: 'unit',
      label: i18next.t('用量单位'),
      render: () => {
        return (
          <HhGroupSearch
            disabled={isDisableForm}
            set={setFieldsValue}
            data={formData}
            nameKey="usageUnitName"
            codeKey="usageUnitCode"
            idKey="usageUnitId"
            getDataConfig={{
              fun: UnitGetPageListByParm,
              keyToKey: {
                usageUnitName: 'uomDesc',
                usageUnitCode: 'uom',
                usageUnitId: 'id',
              },
            }}
            Component={SerachUnit}
          />
        );
      },
    },
  ];
  return data;
};

export default getFormList;
