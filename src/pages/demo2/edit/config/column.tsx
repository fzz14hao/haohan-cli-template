
import { renderDate,renderCodeAndName, amount } from '@haohan/utils';
import { Button } from 'antd';
import i18n from 'i18next';

const getColumn = (props: any) => {
  const { basicInfo } = props;
  return [
    {
      id: 1,
      name: i18n.t('序号'),
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
      name: i18n.t('工单号'),
      features: { sortable: true },
    },
    {
      id: 3,
      width: 140,
      code: 'styleCode',
      name: i18n.t('款式编码'),
      features: { sortable: true },
    },
    {
      id: 4,
      width: 140,
      code: 'styleName',
      name: i18n.t('款式名称'),
      features: { sortable: true },
    },
    {
      id: 5,
      code: 'currencyCode',
      name: i18n.t('货币'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any) =>
        renderCodeAndName(record, { code: 'currencyCode', name: 'currencyName' }),
    },
    {
      id: 6,
      code: 'prodOrderQty',
      name: i18n.t('工单数量'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },

    {
      id: 7,
      code: 'price',
      name: i18n.t('单价'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },
    {
      id: 8,
      code: 'amtCost',
      name: i18n.t('成本金额'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },

    {
      id: 9,
      code: 'totalSAM',
      name: i18n.t('总ASM'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },

    {
      id: 10,
      code: 'transDate',
      name: i18n.t('报工日期'),
      width: 120,
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 24,
      code: 'operate',
      name: i18n.t('操作'),
      lock: true,
      width: 100,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <Button
              disabled={basicInfo?.status !== 1}
              size="small"
              type="link"
              onClick={() => props.onEdit(value, record, rowIndex)}
            >
              {i18n.t('详情')}
            </Button>
          </div>
        );
      },
    },
  ];
};

export default getColumn;