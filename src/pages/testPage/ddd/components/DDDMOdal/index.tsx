import { useEffect } from 'react';
import { DraggableModal, HhForm, HhModalProps } from '@haohan/ui';
import getFormList from './config/formList';
import i18next from '@haohan/utils/es/hhI18next';
import { useHhForm } from '@haohan/hooks';
import { ComponentDesignBaseAddOrUpdate } from '@/services/Mos/ComponentDesignBase';



const AddModal = (props: HhModalProps) => {
  const { parentData, onOk, visible, setVisible } = props;

  const {
    form,
    formData,
    submitForm,
    runValidateFields,
    onValuesChange,
    setFieldsValue,
    isLoading,
  } = useHhForm<any>({
    initFormData: parentData,
  });

  const onSave = async () => {
    if (!(await runValidateFields(form))) return;
    const params = {
      ...formData,
    };
    submitForm<API.ComponentDesignBaseDtoApiResult, API.ComponentDesignBaseDto>(
      ComponentDesignBaseAddOrUpdate(params),
    ).then((res) => {
      if (res) {
        setVisible(false);
        onOk && onOk();
      }
    });
  };

  useEffect(() => {
    setFieldsValue(parentData);
  }, [parentData]);

  const formList = getFormList({
    formData,
    setFieldsValue,
  });

  return (
    <DraggableModal
      title={parentData.id ? i18next.t('详情') : i18next.t('新建')}
      visible={visible}
      width={600}
      onCancel={() => setVisible(false)}
      onOk={onSave}
      confirmLoading={isLoading}
    >
      <HhForm formProps={{ form, onValuesChange }} formData={formList} columnsNum={1} />
    </DraggableModal>
  );
};

export default AddModal;
