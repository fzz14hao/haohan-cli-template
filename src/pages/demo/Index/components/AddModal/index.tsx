import { useEffect } from 'react';
import { DraggableModal, HhForm } from '@haohan/ui';
import getFormList from './config/formList';
import i18next from 'i18next';
import { useHhForm } from '@haohan/hooks';
import { ComponentDesignBaseAddOrUpdate } from '@/services/Mos/ComponentDesignBase';

type AddModalProps = {
  rowData: any;
  setVisible: (b: boolean) => void;
  onOk: (d?: any) => void;
  visible: boolean;
};

const AddModal = (props: AddModalProps) => {
  const { rowData, onOk, visible, setVisible } = props;

  const { form, formData, submitForm, runValidateFields, onValuesChange, setFieldsValue } =
    useHhForm<any>({
      initFormData: rowData,
    });

  const onSave = async () => {
    if (!(await runValidateFields(form))) return;
    const params = {
      ...formData,
    };
    submitForm<API.ComponentDesignBaseDtoApiResult, API.ComponentDesignBaseDto>(
      ComponentDesignBaseAddOrUpdate(params),
      { prohibit: false },
    ).then((res) => {
      if (res) {
        setVisible(false);
        onOk && onOk();
      }
    });
  };

  useEffect(() => {
    setFieldsValue(rowData);
  }, [rowData]);

  const formList = getFormList({
    formData,
    setFieldsValue,
  });

  console.log(formData)

  return (
    <DraggableModal
      title={rowData.id ? i18next.t('编辑') : i18next.t('新建')}
      visible={visible}
      width={600}
      onCancel={() => setVisible(false)}
      onOk={onSave}
    >
      <HhForm
        formName="demo-edit-form"
        hasSet={true}
        formProps={{ form, onValuesChange }}
        formData={formList}
        columnsNum={1}
        labelColWidth={140}
      />
    </DraggableModal>
  );
};

export default AddModal;
