import { UnitGetPageListByParm } from '@/services/BasicInfo/Unit';

import { SerachUnit, HhGroupSearch } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';
import { FormDataProps } from '@haohan/ui/es/Components/HhForm/HhFormProps';

const getFormList = (props?: any) => {
  const { formData, setFieldsValue } = props;

  const data: FormDataProps[] = [
    {
      key: 2,
      label: i18next.t('部位编号'),
      name: 'componentCode',
      props: {
        rules: [{ required: true, message: i18next.t('请输入部件编码') }],
      },
      componentType: 'Input',
    },

    {
      key: 7,
      name: 'date',
      label: i18next.tEn('Date'),
      componentType: 'DatePicker',
    },
    {
      key: 8,
      name: 'unit',
      label: i18next.t('用量单位'),
      render: () => {
        return (
          <HhGroupSearch
            set={setFieldsValue}
            data={formData}
            nameKey="usageUnitName"
            codeKey="usageUnitCode"
            getDataConfig={{
              fun: UnitGetPageListByParm,
              keyToKey: {
                usageUnitName: 'uomDesc',
                usageUnitCode: 'uom',
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
