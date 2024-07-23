
import { Input } from 'antd';
import i18next from '@haohan/utils/es/hhI18next';

 const getFormList = (props?: any) => {
 const { formData, setFieldsValue, isDisableForm } = props;

 const data = [

    {
        key: 2 ,
        label:i18next.t( '工厂编码'),
        name: 'factoryCode',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
        key: 3 ,
        label:i18next.t( '工厂名称'),
        name: 'factoryName',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
        key: 4 ,
        label:i18next.t( '公司'),
        name: 'companyCode',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
        key: 5 ,
        label:i18next.t( '尺码组'),
        name: 'sizeRangeCode',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
        key: 6 ,
        label:i18next.t( '部门'),
        name: 'departmentCode',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
        key: 7 ,
        label:i18next.t( '物料编码'),
        name: 'materialCode',  
        render: () => {
        return <Input disabled={isDisableForm} />;
        },
    }, 

    {
          key: 16,
          label: i18next.t('创建人'),
          name: 'userIdCreated',
          render: () => {
            return <Input disabled/>;
          },
        }, {
          key: 17,
          label: i18next.t( '创建时间'),
          name: 'timeCreated',
          render: () => {
            return <Input disabled/>;
          },
        },
        {
          key: 18,
          label: i18next.t('修改人'),
          name: 'userIdLastMod',
          render: () => {
            return <Input disabled/>;
          },
        }, {
          key: 19,
          label: i18next.t('修改时间'),
          name: 'timeLastMod',
          render: () => {
            return <Input disabled/>;
          },
        },

    ];
 return data;
};

export default getFormList;
