import { HhDeleteButton, HhStatusTag } from '@haohan/ui';
import { renderCodeAndName, amount } from '@haohan/utils';
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';
import { CostSharingDelete } from '@/services/Fi/CostSharing';

const getColumn = (props: any) => {
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
      code: 'factoryCode',
      name: i18next.t('工厂编码'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 3,
      code: 'factoryName',
      name: i18next.t('工厂名称'),
      width: 100,
      features: { sortable: true },
    },

    {
      id: 4,
      code: 'status',
      width: 100,
      name: i18next.t('是否分摊'),
      features: { sortable: true },
      render: (value: any) => {
        return (
          <HhStatusTag
            status={value}
            configData={[
              {
                text: i18next.tt('是'),
                color: 'blue',
                statusCode: 1,
              },
              {
                text: i18next.tt('否'),
                color: 'red',
                statusCode: 0,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },

    {
      id: 5,
      code: 'extCost',
      name: i18next.t('成本金额'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render: amount,
    },

    {
      id: 6,
      code: 'departmentCode',
      name: i18next.t('部门'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any) =>
        renderCodeAndName(record, { code: 'departmentCode', name: 'departmentName' }),
    },
    {
      id: 7,
      code: 'timeCreated',
      name: i18next.t('创建时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 8,
      code: 'userIdCreated',
      name: i18next.t('创建人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 9,
      code: 'timeLastMod',
      name: i18next.t('修改时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 10,
      code: 'userIdLastMod',
      name: i18next.t('修改人'),
      width: 100,
      features: { sortable: true },
    },

    {
      id: 100,
      code: 'operate',
      name: i18next.t('操作'),
      lock: true,
      width: 160,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <Button size="small" type="link" onClick={() => props.onEdit(value, record, rowIndex)}>
              {i18next.t('详情')}
            </Button>
            <HhDeleteButton
              type="link"
              size="small"
              record={{
                id: record?.id,
              }}
              rowIndex={rowIndex}
              deleteFn={CostSharingDelete}
              removeIndex={props.removeIndex}
            ></HhDeleteButton>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
