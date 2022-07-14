import { UnitGetPageListByParm } from '@/services/BasicInfo/Unit';
import { Input, Select } from 'antd';
import { SerachUnit, HhGroupSearch } from '@haohan/ui';
import i18next from 'i18next';
import i18n from 'i18next';

const prodProcessList = ['CUT', 'SEW', 'PCK', 'EMB'];

const getFormList = (props?: any) => {
  const { formInfo, setData } = props;

  const data = [
    {
      key: 2,
      label: i18n.t('部位编号'),
      name: 'componentCode',
      props: {
        rules: [{ required: true, message: i18n.t('请输入部件编码') }],
      },
      render: () => {
        return <Input />;
      },
    },
    {
      key: 3,
      label: i18n.t('部位名称'),
      name: 'componentName',
      props: {
        rules: [{ required: true, message: i18n.t('请输入部名称') }],
      },
      render: () => {
        return <Input />;
      },
    },
    {
      key: 4,
      label: i18n.t('分类'),
      name: 'className',
      props: {
        rules: [{ required: true, message: i18n.t('请输入部件类别') }],
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
      key: 6,
      name: 'prodProcess',
      label: i18next.t('使用部门'),
      props: {
        rules: [{ required: true, message: i18next.t('请选择使用部门') }],
      },
      render: (value: any) => {
        return (
          <Select>
            {prodProcessList.map((item: any, i) => {
              return (
                <Select.Option key={i} value={i}>
                  {item}
                </Select.Option>
              );
            })}
          </Select>
        );
      },
    },
    {
      key: 7,
      name: 'useage',
      label: i18next.t('用量范围'),
      render: () => {
        return <Input />;
      },
    },
    {
      key: 8,
      name: 'unit',
      label: i18next.t('用量单位'),
      render: () => {
        return (
          <HhGroupSearch
            set={setData}
            data={formInfo}
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
    {
      key: 10,
      name: 'componentMatDetails',
      label: i18next.t('物料小类'),
      render: (value: any) => {
        return (
          <Select mode="multiple">
            {formInfo?.matGroupList?.map((el: any) => {
              return (
                <Select.Option value={el.id}>
                  {' '}
                  {el.matGroupCode + '-' + el.matGroupName}{' '}
                </Select.Option>
              );
            })}
          </Select>
        );
      },
    },
  ];
  return data;
};

export default getFormList;
