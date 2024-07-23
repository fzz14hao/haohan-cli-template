
import { Button } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

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
        code: '',  
        name:i18next.t( '工厂编码'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 3 ,  
        code: '',  
        name:i18next.t( '工厂名称'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 4 ,  
        code: '',  
        name:i18next.t( '公司'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 5 ,  
        code: '',  
        name:i18next.t( '尺码组'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 6 ,  
        code: '',  
        name:i18next.t( '部门'), 
        width: 100,  
        features: { sortable: true },
    },

     {  
        id: 7 ,  
        code: '',  
        name:i18next.t( '物料编码'), 
        width: 100,  
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
