import { HhStatusTag } from '@haohan/ui';
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

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
      code: 'componentCode',
      name: i18next.t('部位编号'),
      width: 120,
      features: { sortable: true },
    },
    {
      id: 3,
      width: 150,
      code: 'componentName',
      name: i18next.t('部位名称'),
      features: { sortable: true },
    },
   
    {
      id: 7,
      code: 'prodProcess',
      name: i18next.t('使用部门'),
      width: 100,
      features: { sortable: true },
      render: (value: any) => {
        return (
          <HhStatusTag
            status={value}
            configData={[
              {
                text: i18next.tt('CUT'),
                color: 'blue',
                statusCode: 0,
              },
              {
                text: i18next.tt('SEW'),
                color: 'red',
                statusCode: 1,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },
    {
      id: 8,
      code: 'timeCreated',
      name: i18next.t('创建时间'),
      width: 120,
      features: { sortable: true },
    },
    {
      id: 9,
      code: 'userIdCreated',
      name: i18next.t('创建人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 10,
      code: 'timeLastMod',
      name: i18next.t('修改时间'),
      width: 120,
      features: { sortable: true },
    },
    {
      id: 11,
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
      width: 120,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <Button type="link" size="small" onClick={() => props.onEdit(value, record, rowIndex)}>
              {i18next.t('详情')}
            </Button>
            <Button
              type="link"
              className="cus-ml-5"
              size="small"
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
