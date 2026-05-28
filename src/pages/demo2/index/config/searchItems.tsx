import { HhGroupSearch, SearchFactory } from '@haohan/ui';
import i18next from '@haohan/utils/es/hhI18next';
import { FactoryGetPageListByParmNoPermission } from '@/services/BasicInfo/Factory';
import { HhProSearchItemProps } from '@haohan/ui/es/Components/HhProSearch/HhProSearchProps';

const getSearchItems = (props?: any) => {
  const { proSearchData, actions } = props;
  const data: HhProSearchItemProps[] = [
    {
      key: 1,
      label: i18next.tEn('$HHac23.factory.Factory$HH'),
      name: 'factoryCode',
      render: () => {
        return (
          <HhGroupSearch
            single
            set={actions.setProSearchData}
            data={proSearchData}
            codeKey="factoryCode"
            getDataConfig={{
              fun: FactoryGetPageListByParmNoPermission,
              keyToKey: {
                factoryCode: 'ftyCode',
              },
            }}
            ComponentProps={{
              multiple: true,
            }}
            Component={SearchFactory}
          />
        );
      },
    },
    {
      key: 2,
      name: 'orderNo',
      label: i18next.tEn('$HHac13.orderNo.Order No$HH'),
      componentType: 'Input',
    },
    {
      key: 3,
      name: 'createTime',
      label: i18next.tEn('$HHac14.createTime.Create Time$HH'),
      componentType: 'DatePicker',
    },
  ];
  return data;
};

export default getSearchItems;
