import { HhButtonModal, HhDeleteButton, HhStatusTag } from '@haohan/ui';
import { renderDate } from '@haohan/utils';
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
      id: 4,
      code: 'styleCode',
      name: i18next.t('款型编号'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 5,
      code: 'styleName',
      name: i18next.t('款型名称'),
      width: 180,
      features: { sortable: true },
    },
    {
      id: 5.5,
      code: 'className',
      name: i18next.t('分类'),
      width: 80,
      features: { sortable: true },
    },
    {
      id: 5.8,
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
                text: i18next.t('CUT'),
                color: 'blue',
                statusCode: 0,
              },
              {
                text: i18next.t('SEW'),
                color: 'red',
                statusCode: 1,
              },
              {
                text: i18next.t('PCK'),
                color: 'green',
                statusCode: 2,
              },
              {
                text: i18next.t('EMB'),
                color: 'yellow',
                statusCode: 3,
              },
            ]}
          ></HhStatusTag>
        );
      },
    },
    {
      id: 6,
      code: 'timeCreated',
      name: i18next.t('创建时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 6.5,
      code: 'userIdCreated',
      name: i18next.t('创建人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 7,
      code: 'timeLastMod',
      name: i18next.t('修改时间'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 8,
      code: 'userIdLastMod',
      name: i18next.t('修改人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 24,
      code: 'operate',
      name: i18next.t('操作'),
      lock: true,
      width: 140,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <HhButtonModal
              type="text"
              
              Components={AddModal}
              onOk={async () => props?.startRetrieveData()}
              parentData={record}
            >
              {i18next.t('详情')}
            </HhButtonModal>
            <HhDeleteButton
              type="text"
              record={record}
              deleteFn={ComponentDelete}
              rowIndex={rowIndex}
              onOk={async () => props?.startRetrieveData()}
            >
              删除
            </HhDeleteButton>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
