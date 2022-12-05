import { DraggableModal, HhTable } from '@haohan/ui';

import i18next from '@haohan/utils/es/hhI18next';

import getColumn from './config/column';

const DetailsModal = (props: any) => {
  const { onOk, visible, setVisible, data } = props;

  const column = getColumn({});

  return (
    <DraggableModal
      title={i18next.t('详情')}
      visible={visible}
      width={1200}
      onCancel={() => setVisible(false)}
      onOk={onOk}
    >
      <HhTable column={column} dataSource={data || []} height={500}></HhTable>
    </DraggableModal>
  );
};

export default DetailsModal;
