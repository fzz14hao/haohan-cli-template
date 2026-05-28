import i18next from '@haohan/utils/es/hhI18next';
import { HhProFormItemsProps } from '@haohan/ui/es/Components/HhProForm/HhProFormProps';

const getFormList = (props?: any) => {
  const { hhProFormData, setFieldsValue, isDisable } = props;

  const data: HhProFormItemsProps[] = [
    {
      key: 1,
      name: 'fileId',
      label: i18next.tEn('$HHba6c.fileId.File ID$HH'),
      componentType: 'Input',
      disabled: true,
    },

    {
      key: 2,
      name: 'file1',
      label: i18next.tEn('$HH919aa.file1.File 1$HH'),
      componentType: 'Input',
      disabled: isDisable,
    },
    {
      key: 3,
      name: 'file2',
      label: i18next.tEn('$HH929aa.file2.File 2$HH'),
      componentType: 'DatePicker',
      disabled: isDisable,
    },
  ];

  return data;
};

export default getFormList;
