import React, { useState, useEffect, useMemo } from 'react';
import i18next from '@haohan/utils/es/hhI18next';
import { HhButtonModal, HhSearchBar, HHSearchBarPageProps } from '@haohan/ui';

import getOtherData from '../../config/otherData';
import moment from 'moment';
import AddModal from '../AddModal';

const Search: React.FC<HHSearchBarPageProps> = (props) => {
  const { keyword, onSearch, setAllSearchValue, isLoading, addCallBack } = props;

  const [searchValue, setSearchValue] = useState<any>({});

  const onSearchValueChange = (changedValues: any, allValues: any) => {
    const res = { ...searchValue, ...allValues };
    setSearchValue(res);
  };

  useEffect(() => {
    if (setAllSearchValue) {
      setAllSearchValue(searchValue);
    }
  }, [searchValue]);

  const otherData = useMemo(
    () =>
      getOtherData({
        setSearchValue,
        searchValue,
      }),
    [searchValue],
  );

  return (
    <>
      <HhSearchBar
        onSearch={onSearch}
        value={keyword}
        placeholder="请输入搜索内容"
        otherData={otherData}
        allKeyWorld={searchValue}
        onSearchValueChange={onSearchValueChange}
        formatValue={{
          createTime: {
            set: (val: moment.MomentInput[]) => {
              return [moment(val[0]).format('YYYY/MM/DD'), moment(val[1]).format('YYYY/MM/DD')];
            },
            get: (val: moment.MomentInput[]) => {
              return [moment(val[0], 'YYYY/MM/DD'), moment(val[1], 'YYYY/MM/DD')];
            },
          },
        }}
        isLoading={isLoading}
        renderRight={
          <HhButtonModal
            type="primary"
            Components={AddModal}
            onOk={async () => addCallBack()}
            parentData={{}}
          >
            {i18next.t('添加')}
          </HhButtonModal>
        }
      />
    </>
  );
};

export default Search;
