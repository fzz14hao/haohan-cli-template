import { amount } from '@haohan/utils';
import i18next from '@haohan/utils/es/hhI18next';
import { HhButtonModal, HhGroupSearch, HhTableFormItem, SearchFactory } from '@haohan/ui';
import DetailsModal from '../components/DetailsModal';
import { Form, Input } from 'antd';
import { FactoryGetPageListByParmNoPermission } from '@/services/BasicInfo/Factory';
// import HhTableFormItem from '../components/HhTableFormItem';


const getColumn = (props: any) => {
  const { formData, isDisableForm, getTableFormDataSource,setTableFormDataSource } = props;
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
      id: 1.2,
      width: 140,
      code: 'factoryCode',
      name: i18next.t('工厂'),
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <HhGroupSearch
            set={(e) => setTableFormDataSource(e,rowIndex)}
            data={record}
            disabled={isDisableForm}
            nameKey={`${record.hhId}_hhId_factoryName`}
            codeKey={`${record.hhId}_hhId_factoryCode`}
            getDataConfig={{
              fun: FactoryGetPageListByParmNoPermission,
              keyToKey: {
                factoryCode: 'ftyCode',
                factoryName: 'factoryName',
                factoryId: 'id',
              },
            }}
            Component={SearchFactory}
          />
        );
      },
    },

    {
      id: 2,
      width: 140,
      code: 'prodOrderNo',
      name: i18next.t('工单号'),
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <HhTableFormItem
            onlyId={record?.hhId}
            keyName={'prodOrderNo'}
            rules={[
              {
                required: true,
                message: `Please Input`,
              },
            ]}
          >
            <Input onBlur={getTableFormDataSource} />
          </HhTableFormItem>
        );
      },
    },

    {
      id: 7,
      code: 'price',
      name: i18next.t('单价'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <HhTableFormItem onlyId={record?.hhId} keyName={'price'}>
            <Input onBlur={getTableFormDataSource} />
          </HhTableFormItem>
        );
      },
    },

    {
      id: 7,
      code: 'total',
      name: i18next.t('总价'),
      width: 100,
      align: 'right',
      features: { sortable: true },
      render: (value: any, record: any, rowIndex: number) => {
        return record.price * 100;
      },
    },

    {
      id: 24,
      code: 'operate',
      name: i18next.t('操作'),
      lock: true,
      width: 100,
      isOperate: true,
      render: (value: any, record: any, rowIndex: number) => {
        return (
          <div style={{ textAlign: 'center' }}>
            <HhButtonModal
              type="text"
              Components={DetailsModal}
              parentData={record}
              onOk={async () => props?.getById()}
            >
              {i18next.t('详情')}
            </HhButtonModal>
          </div>
        );
      },
    },
  ];
};

export default getColumn;
