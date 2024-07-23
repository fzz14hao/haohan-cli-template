import { amount, renderDate } from '@haohan/utils';
import { Button, Tag } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

const getColumn = (props: any) => {
  return [
    {
      id: 1,
      name:i18next.t('序号'),
      width: 60,
      lock: true,
      getValue(_: any, rowIndex: number) {
        return String(rowIndex + 1);
      },
    },
    {
      id: 2,
      code: 'prodOrderNo',
      name:i18next.t('工单号'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 3,
      width: 100,
      code: 'factoryCode',
      name:i18next.t('工厂编码'),
      features: { sortable: true },
    },
    {
      id: 4,
      width: 100,
      code: 'factoryName',
      name:i18next.t('工厂名称'),
      features: { sortable: true },
    },

    {
      id: 5,
      code: 'departmentCode',
      name:i18next.t('部门编码'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 6,
      code: 'departmentName',
      name:i18next.t('部门名称'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 7,
      code: 'costCenterCode',
      name:i18next.t('成本中心'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 8,
      code: 'styleCode',
      name:i18next.t('款式编号'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 9,
      code: 'styleName',
      name:i18next.t('款式名称'),
      width: 100,
      features: { sortable: true },
    },

    {
      id: 10,
      width: 100,
      code: 'colorCode',
      name:i18next.t('颜色编码'),
      features: { sortable: true },
    },
    {
      id: 11,
      width: 100,
      code: 'colorName',
      name:i18next.t('颜色名称'),
      features: { sortable: true },
    },

    {
      id: 12,
      code: 'sam',
      width: 100,
      name:i18next.t('SAM'),
      align: 'right',
      features: { sortable: true },
      render:amount
    },
    {
      id: 13,
      code: 'prodOrderQty',
      width: 100,
      name:i18next.t('数量'),
      align: 'right',
      features: { sortable: true },
      render:amount
    },
    {
      id: 14,
      code: 'totalSAM',
      width: 100,
      name:i18next.t('总SAM'),
      align: 'right',
      features: { sortable: true },
      render:amount
    },
    {
      id: 15,
      code: 'transDate',
      name:i18next.t('交易日期'),
      width: 100,
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 16,
      code: 'amtCost',
      name:i18next.t('成本'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },
  ];
};

export default getColumn;
