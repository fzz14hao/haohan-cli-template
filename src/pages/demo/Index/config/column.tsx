import { HhStatusTag } from '@haohan/ui';
import { renderDate } from '@haohan/utils';
import { Button } from 'antd';

import i18n from 'i18next';

const getColumn = (props: any) => {
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
      code: 'componentCode',
      name: i18n.t('部位编号'),
      width: 120,
      features: { sortable: true },
    },
    {
      id: 3,
      width: 150,
      code: 'componentName',
      name: i18n.t('部位名称'),
      features: { sortable: true },
    },
    {
      id: 4,
      code: 'styleCode',
      name: i18n.t('款型编号'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 5,
      code: 'styleName',
      name: i18n.t('款型名称'),
      width: 180,
      features: { sortable: true },
    },
    {
      id: 5.5,
      code: 'className',
      name: i18n.t('分类'),
      width: 80,
      features: { sortable: true },
    },
    {
      id: 5.8,
      code: 'prodProcess',
      name: i18n.t('使用部门'),
      width: 100,
      features: { sortable: true },
      render: (value: any) => {
        return (
          <HhStatusTag
            status={value}
            configData={[
              {
                text: i18n.t('CUT'),
                color: 'blue',
                statusCode: 0,
              },
              {
                text: i18n.t('SEW'),
                color: 'red',
                statusCode: 1,
              },
              {
                text: i18n.t('PCK'),
                color: 'green',
                statusCode: 2,
              },
              {
                text: i18n.t('EMB'),
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
      name: i18n.t('创建时间'),
      width: 100,
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 6.5,
      code: 'userIdCreated',
      name: i18n.t('创建人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 7,
      code: 'timeLastMod',
      name: i18n.t('修改时间'),
      width: 100,
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 8,
      code: 'userIdLastMod',
      name: i18n.t('修改人'),
      width: 100,
      features: { sortable: true },
    },
    {
      id: 24,
      code: 'operate',
      name: i18n.t('操作'),
      lock: true,
      width: 120,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <Button size="small" onClick={() => props.onEdit(value, record, rowIndex)}>
              {i18n.t('详情')}
            </Button>
            <Button
              className="cus-ml-5"
              size="small"
              onClick={() => props.onDel(value, record, rowIndex)}
            >
              {i18n.t('删除')}
            </Button>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
