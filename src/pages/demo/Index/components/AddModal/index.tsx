import { useEffect } from 'react';
import { DraggableModal, HhForm } from '@haohan/ui';
import getFormList from './config/formList';
import i18next from '@haohan/utils/es/hhI18next';
import { useHhForm } from '@haohan/hooks';
import { ComponentDesignBaseAddOrUpdate } from '@/services/Mos/ComponentDesignBase';
import { HhButtonModalProps } from '@haohan/ui/es/BusinessComponent/HhButtonModal';

const AddModal = (props: HhButtonModalProps) => {
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
    submitForm(ComponentDesignBaseAddOrUpdate(params), { prohibit: false }).then((res) => {
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
      title={
        parentData?.id ? i18next.tEn('$HH125c.demo.Edit$HH') : i18next.tEn('$HH12v.demo.Create$HH')
      }
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={onSave}
      okButtonProps={{ loading: isLoading }}
    >
      <HhForm hasSet formProps={{ form, onValuesChange }} formData={formList} columnsNum={1} />
    </DraggableModal>
  );
};

export default AddModal;
