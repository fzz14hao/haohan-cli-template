import { HhActionColumnWarp, HhButtonModal, HhDeleteButton, HhTableIndex } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';
import AddModal from '../components/AddModal';
import { ComponentDelete } from '@/services/Mos/Component';
import { formatAmount, formatDate } from '@haohan/utils';

const getColumns = (props: any) => {
  return [
    {
      id: 1,
      name: i18next.tEn('$HHvbfc.seq.Seq$HH'),
      width: 60,
      lock: true,
      getValue(_: any, rowIndex: number) {
        return <HhTableIndex rowIndex={rowIndex} record={_} />;
      },
    },
    {
      id: 2,
      code: 'componentCode',
      name: i18next.tEn('$HHac13f.componentCode.Component Code$HH'),
      width: 120,
      features: { sortable: true },
    },
    {
      id: 3,
      width: 150,
      code: 'componentName',
      name: i18next.tEn('$HHac2x3.componentName.Component Name$HH'),
      features: { sortable: true },
    },
    {
      id: 3,
      width: 150,
      code: 'qty',
      name: i18next.tEn('$HHac2x3.qty.Qty$HH'),
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return formatAmount(value);
      },
    },

    {
      id: 6,
      code: 'timeCreated',
      name: i18next.tEn('$HHac12.createTime.Create Time$HH'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return formatDate(value);
      },
    },
    {
      id: 6.5,
      code: 'userIdCreated',
      name: i18next.tEn('$HHac15c.createUser.Create User$HH'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 7,
      code: 'timeLastMod',
      name: i18next.tEn('$HHagr14.lastModTime.Last Mod Time$HH'),
      width: 100,
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return formatDate(value);
      },
    },
    {
      id: 8,
      code: 'userIdLastMod',
      name: i18next.tEn('$HHasv4.lastModUser.Last Mod User$HH'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 24,
      code: 'operate',
      name: i18next.t('操作'),
      lock: true,
      width: 80,
      isOperateRow: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <HhActionColumnWarp record={record}>
            <HhButtonModal
              iconType="edit"
              Components={AddModal}
              onOk={async () => props?.startRetrieveData()}
              isHideText
              parentData={record}
              size="small"
            ></HhButtonModal>
            <HhDeleteButton
              iconType="delete"
              size="small"
              record={record}
              deleteFn={ComponentDelete}
              isHideText
              rowIndex={rowIndex}
              onOk={async () => props?.startRetrieveData()}
            ></HhDeleteButton>
          </HhActionColumnWarp>
        );
      },
    },
  ];
};

export default getColumns;
