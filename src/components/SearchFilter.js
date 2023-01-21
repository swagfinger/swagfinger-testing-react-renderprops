import { useState } from 'react';

export const SearchFilter = ({ render, filterMethod, data }) => {
  //handles state of input
  const [queryString, setQueryString] = useState('');

  //and when input changes...
  const onChangeHandler = (e) => {
    console.log('console: ', e.currentTarget.value);
    setQueryString(e.currentTarget.value);
  };

  //order is important
  const results = filterMethod(queryString, data);

  return render({ results, onChangeHandler, queryString });
};
