import React, { useState, useEffect } from 'react';
import i18next from '@haohan/utils/es/hhI18next';
import { Button } from 'antd';
import { HhSearchBar } from '@haohan/ui';

import getOtherData from '../../config/otherData';
import moment from 'moment';

type SearchProps = {
  keyword: string | undefined;
  onSearch: (obj: any) => void;
  setAllSearchValue?: (obj: any) => void;
  onAdd?: () => void;
};

const Search: React.FC<SearchProps> = (props) => {
  const { keyword, onSearch, setAllSearchValue, onAdd } = props;

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

  const otherData = getOtherData({
    setSearchValue,
    searchValue,
  });

  return (
    <>
      <HhSearchBar
        onSearch={onSearch}
        value={keyword}
        placeholder="请输入部位编号/部位名称/款型编号/款型名称"
        otherData={otherData}
        allKeyWorld={searchValue}
        onSearchValueChange={onSearchValueChange}
        formatValue={{
          createTime: {
            set: (val: moment.MomentInput[]) => {
              return [
                moment(val[0]).format('YYYY/MM/DD'),
                moment(val[1]).format('YYYY/MM/DD'),
              ];
            },
            get: (val: moment.MomentInput[]) => {
              return [
                moment(val[0], 'YYYY/MM/DD'),
                moment(val[1], 'YYYY/MM/DD'),
              ];
            },
          },
        }}
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
