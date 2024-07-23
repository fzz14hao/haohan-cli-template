
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';
import { renderDate } from '@haohan/utils';

const getColumn = (props?: any) => {
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
        id: 2 ,  
        code:  'factoryCode',  
        name:i18next.t( '工厂编码'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 4 ,  
        code:  'factoryName',  
        name:i18next.t( '工厂名称'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 6 ,  
        code:  'companyCode',  
        name:i18next.t( '公司'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 8 ,  
        code:  'sizeRangeCode',  
        name:i18next.t( '尺码组'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 10 ,  
        code:  'departmentCode',  
        name:i18next.t( '部门'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 12 ,  
        code:  'materialCode',  
        name:i18next.t( '物料编码'), 
        width: 100,  
        features: { sortable: true },
    },

   {
      id: 96,
      code: 'timeCreated',
      width: 100,
      name: i18next.t('创建时间'),
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 97,
      code: 'userIdCreated',
      name: i18next.t('创建人'),
      width: 100,
      features: { sortable: true },
    },

    {
      id: 98,
      code: 'timeLastMod',
      width: 125,
      name: i18next.t('最后修改时间'),
      features: { sortable: true },
      render: renderDate,
    },
    {
      id: 99,
      code: 'userIdLastMod',
      name: i18next.t('最后修改人'),
      width: 120,
      features: { sortable: true },
    },

    {
          id: 100,
          code: 'operate',
          name: i18next.t('操作'),
          lock: true,
          width: 200,
          isOperate: true,
          render: (value: any, record: any, rowIndex: number) => {
            return (
              <div style={{ textAlign: 'center' }}>
                <Button size="small" type="link" onClick={() => props.onEdit(value, record, rowIndex)}>
                  {i18next.t('详情')}
                </Button>
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
        }

  ];
};

export default getColumn;
