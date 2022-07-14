import {DatePicker} from 'antd'
import { HhGroupSearch, SearchFactory } from '@haohan/ui';
import i18next from 'i18next';
import { FactoryGetPageListByParmNoPermission } from '@/services/BasicInfo/Factory';

const getOtherData = (props?: any) => {
  const { setSearchValue, searchValue } = props;
  const data = [
    {
      key: 1,
      label: i18next.t('工厂'),
      name: 'factoryCode',

      render: () => {
        return (
          <HhGroupSearch
            set={setSearchValue}
            data={searchValue}
            nameKey="factoryName"
            codeKey="factoryCode"
            idKey="factoryId"
            getDataConfig={{
              fun: FactoryGetPageListByParmNoPermission,
              keyToKey: {
                factoryCode: 'ftyCode',
                factoryName: 'factoryName',
                factoryId: 'id',
                currency: 'currency',
                currencyName: 'currencyName',
              },
            }}
            Component={SearchFactory}
          />
        );
      },
    },
    {
      key: 1,
      name: 'createTime',
      label: i18next.t('创建日期'),
      render: () => {
        return <DatePicker.RangePicker />;
      },
    },
  ];
  return data;
};

export default getOtherData;
