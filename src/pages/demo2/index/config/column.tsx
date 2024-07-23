import { HhStatusTag } from '@haohan/ui';
import { renderDate, renderCodeAndName, amount } from '@haohan/utils';
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

const getColumn = (props: any) => {
  const { onCostExpense, onCancelExpense } = props;
  console.log(1)
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
      id: 3,
      code: 'factoryCode',
      name:i18next.t('工厂编码'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 4,
      code: 'factoryName',
      name:i18next.t('工厂名称'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 5,
      code: 'financialDate',
      name:i18next.t('账期'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 6,
      code: 'status',
      width: 100,
      name:i18next.t('是否分摊'),
      features: { sortable: true },
      render: (value: any) => {
        return (
          <HhStatusTag
            status={value}
            configData={[
              {
                text:i18next.t('是'),
                color: 'blue',
                statusCode: 1,
              },
              {
                text:i18next.t('否'),
                color: 'red',
                statusCode: 0,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },
    {
      id: 7,
      code: 'costCenterCode',
      width: 100,
      name:i18next.t('成本中心'),
      features: { sortable: true },
    },
    {
      id: 8,
      code: 'costCenterName',
      name:i18next.t('成本中心说明'),
      width: 130,
      features: { sortable: true },
    },
    {
      id: 9,
      code: 'currencyName',
      name:i18next.t('货币'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any) =>
        renderCodeAndName(record, { code: 'currencyCode', name: 'currencyName' }),
    },
    {
      id: 10,
      code: 'extCost',
      name:i18next.t('成本金额'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render:amount
    },

    {
      id: 11,
      code: 'costItemCode',
      name:i18next.t('成本代码'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any) =>
        renderCodeAndName(record, { code: 'costItemCode', name: 'costItemName' }),
    },
    {
      id: 12,
      code: 'departmentCode',
      name:i18next.t('部门'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any) =>
        renderCodeAndName(record, { code: 'departmentCode', name: 'departmentName' }),
    },
    {
      id: 13,
      code: 'timeCreated',
      name:i18next.t('创建时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 14,
      code: 'userIdCreated',
      name:i18next.t('创建人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 15,
      code: 'timeLastMod',
      name:i18next.t('修改时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 16,
      code: 'userIdLastMod',
      name:i18next.t('修改人'),
      width: 100,
      features: { sortable: true },
    },

    {
      id: 24,
      code: 'operate',
      name:i18next.t('操作'),
      lock: true,
      width: 180,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div>
            <Button size="small" type="link" onClick={() => props.onEdit(value, record, rowIndex)}>
              {i18next.t('详情')}
            </Button>

            {record.status === 1 && (
              <Button size="small" type="link" onClick={() => onCancelExpense(record.id)}>
                {i18next.t('取消分摊')}
              </Button>
            )}
            {record.status === 0 && (
              <Button size="small" type="link" onClick={() => onCostExpense(record.id)}>
                {i18next.t('分摊')}
              </Button>
            )}
            <Button
              className="cus-ml-5"
              size="small"
              type="link"
              onClick={() => props.onDel(value, record, rowIndex)}
            >
              {i18next.t('删除')}
            </Button>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
