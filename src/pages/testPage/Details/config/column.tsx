import { amount } from '@haohan/utils';
import i18next from '@haohan/utils/es/hhI18next';
import { HhButtonModal } from '@haohan/ui';
import DetailsModal from '../components/DetailsModal';

const getColumn = (props: any) => {
  const { formData, isDisableForm } = props;
  return [
    {
      id: 1,
      name: i18next.t('序号'),
      width: 60,
      lock: true,
      getValue(_: any, rowIndex: number) {
        return String(rowIndex + 1);
      },
    },
    {
      id: 2,
      width: 140,
      code: 'prodOrderNo',
      name: i18next.t('工单号'),
      features: { sortable: true },
    },

    {
      id: 7,
      code: 'price',
      name: i18next.t('单价'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render: amount,
    },

    {
      id: 24,
      code: 'operate',
      name: i18next.t('操作'),
      lock: true,
      width: 100,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <HhButtonModal
              type="text"
              Components={DetailsModal}
              parentData={record}
              onOk={async () => props?.getById()}
            >
              {i18next.t('详情')}
            </HhButtonModal>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
