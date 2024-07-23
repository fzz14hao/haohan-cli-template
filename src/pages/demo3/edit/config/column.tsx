import { amount } from '@haohan/utils';
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

const getColumn = (props: any) => {
  const { formData } = props;
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
            <Button
              disabled={formData?.status !== 1}
              size="small"
              type="link"
              onClick={() => props.onEdit(value, record, rowIndex)}
            >
              {i18next.t('详情')}
            </Button>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
