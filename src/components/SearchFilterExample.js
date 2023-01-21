import { useState } from 'react';

import { SearchFilter } from './SearchFilter';

export const SearchFilterExample = () => {
  const [queryString, setQueryString] = useState('');

  const data = ['pineapple', 'banana', 'apple'];

  const filterMethod = (query, data) => {
    const filtered = query.length
      ? data.filter((item) => {
          return item.includes(query.toLowerCase());
        })
      : [];

    return filtered;
  };

  const onChangeHandler = (e) => {
    console.log('console: ', e.currentTarget.value);
    setQueryString(e.currentTarget.value);
  };

  return (
    <>
      <input onChange={onChangeHandler} value={queryString} />

      <SearchFilter
        filterMethod={filterMethod}
        data={data}
        query={queryString}
        render={({ results }) => {
          return results.map((item, index) => {
            return <div key={index}>{item}</div>;
          });
        }}
      />
    </>
  );
};
