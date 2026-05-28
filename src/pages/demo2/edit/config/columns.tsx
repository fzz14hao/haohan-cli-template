import { HhActionColumnWarp, HhDeleteButton, HhIconButton, HhTableIndex } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';
import { ComponentDelete } from '@/services/Mos/Component';
import { formatAmount, formatDate } from '@haohan/utils';
import { history } from 'umi';

const getColumns = (props: any) => {
  return [
    {
      id: 1,
      name: i18next.tEn('$HHvbfc.seq.Seq$HH'),
      width: 60,
      lock: true,
      isIndexRow: true,
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
            {/* 编辑按钮 */}
            <HhIconButton
              iconType="edit"
              size="small"
              onClick={() => history.push(`/demo2/edit/${record.id}`)}
            />
            {/* 删除按钮 */}
            <HhDeleteButton
              iconType="delete"
              size="small"
              record={record}
              deleteFn={ComponentDelete} //Todo 替换替换为删除函数
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
