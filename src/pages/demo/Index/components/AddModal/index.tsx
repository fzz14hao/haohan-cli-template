import { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { DraggableModal, HhForm } from '@haohan/ui';
import getFormList from './config/formList';
import i18next from 'i18next';
import { useAsync, useValidateFields } from '@haohan/hooks';
import { ComponentDesignBaseAddOrUpdate } from '@/services/Mos/ComponentDesignBase';

type AddModalProps = {
  rowData: any;
  setVisible: (b: boolean) => void;
  onOk: (d?: any) => void;
  visible: boolean;
};

const AddModal = (props: AddModalProps) => {
  const { runSync } = useAsync();
  const { rowData, onOk, visible, setVisible } = props;
  const [formInfo, setFormInfo] = useState(rowData);
  const [form] = Form.useForm();

  const { runValidateFields } = useValidateFields();

  //  设置data
  const setData = (_data: any) => {
    setFormInfo(_data);
    form.setFieldsValue({ ..._data });
  };
  // 监听表单
  const onValuesChange = (changedValues: any, allValues: any) => {
    setData({ ...formInfo, ...allValues });
  };

  const onSave = async () => {
    if (!(await runValidateFields(form))) return;
    const params = {
      ...formInfo,
    };
    runSync<API.ComponentDesignBaseDtoApiResult, API.ComponentDesignBaseDto>(
      ComponentDesignBaseAddOrUpdate(params),
    ).then((res) => {
      if (res) {
        const text = '保存成功';
        message.success(i18next.t(text));
        setVisible(false)
        onOk && onOk();
      }
    });
  };

  useEffect(() => {
    setData(rowData);
  }, [rowData]);

  const formList = getFormList({
    formInfo,
    setData,
  });

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
