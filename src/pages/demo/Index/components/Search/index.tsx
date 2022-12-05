import React, { useState, useEffect } from 'react';
import i18next from '@haohan/utils/es/hhI18next';
import { Button } from 'antd';
import { SearchBar } from '@haohan/ui';

import getOtherData from '../../config/otherData';

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
      <SearchBar
        onSearch={onSearch}
        value={keyword}
        placeholder="请输入部位编号/部位名称/款型编号/款型名称"
        otherData={otherData}
        allKeyWorld={searchValue}
        onSearchValueChange={onSearchValueChange}
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
