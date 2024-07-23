import { DraggableModal, HhForm, HhTable } from '@haohan/ui';

import i18next from '@haohan/utils/es/hhI18next';

import getColumn from './config/column';
import { useHhForm, useHhRequest, useHhTable } from '@haohan/hooks';
import getFormList from './config/formList';

type AddModalProps = {
  rowData: any;
  setVisible: (b: boolean) => void;
  onOk: (d?: any) => void;
  visible: boolean;
  [key: string]: any;
};

const DetailsModal = (props: AddModalProps) => {
  const { rowData, onOk, visible, setVisible } = props;

  const { runRequest, isLoading } = useHhRequest();
  const {
    dataSource,
    addDataSource,
    removeIndex,
    pageIndex,
    setPageIndex,
    pageSize,
    onLoadMore,
    onLoadAll,
    total,
    onTableDelete,
  } = useHhTable<any[]>({ initData: [] });

  const {
    form,
    formData,
    isDisableForm,
    setDisableForm,
    onValuesChange,
    setFieldsValue,
    getByDetails,
    submitForm,
    runValidateFields,
  } = useHhForm<any>({
    initFormData: {},
  });

  const formList = getFormList({
    formData,
    setFieldsValue,
  });
  const column = getColumn({});

  return (
    <DraggableModal
      title={i18next.t('详情')}
      visible={visible}
      width={1600}
      onCancel={() => setVisible(false)}
      onOk={onOk}
      confirmLoading={isLoading}
    >
      <HhForm hasSet formProps={{ form, onValuesChange }} formData={formList} />
      <HhTable column={column} dataSource={dataSource || []} height={500}></HhTable>
    </DraggableModal>
  );
};

export default DetailsModal;
