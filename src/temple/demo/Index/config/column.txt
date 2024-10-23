import { HhButtonModal, HhDeleteButton, HhStatusTag } from '@haohan/ui';
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';
import AddModal from '../components/AddModal';
import { ComponentDelete } from '@/services/Mos/Component';

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
            <HhButtonModal
              type="link"
              size="small"
              Components={AddModal}
              parentData={record}
              onOk={async () => props.addCallBack()}
            >
              {i18next.t('详情')}
            </HhButtonModal>
            <HhDeleteButton
              type="link"
              size="small"
              record={{
                id: record?.id,
              }}
              rowIndex={rowIndex}
              deleteFn={ComponentDelete}
              removeIndex={props.removeIndex}
            ></HhDeleteButton>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
