import React, { useState, useEffect, useMemo } from 'react';
import i18next from '@haohan/utils/es/hhI18next';
import { Button } from 'antd';
import { HhSearchBar, HHSearchBarPageProps } from '@haohan/ui';

import getOtherData from '../../config/otherData';
import moment from 'moment';

const Search: React.FC<HHSearchBarPageProps> = (props) => {
  const { keyword, onSearch, setAllSearchValue, onAdd, isLoading } = props;

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
          <div>
            <Button type="primary" onClick={onAdd}>
              {i18next.t('新建')}
            </Button>
          </div>
        }
      />
    </>
  );
};

export default Search;
