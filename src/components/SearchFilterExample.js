import { SearchFilter } from './SearchFilter';

//SearchFilter needs 2 things
//1. data
//2. filter function
//3. render={} which gets stuff out from inside SearchFilter
export const SearchFilterExample = () => {
  const data = ['pineapple', 'banana', 'apple'];

  //what to do with data - its external because we can change out the filter function as we please.
  //else we have to have many search filters for each filterable data, now, we can have many filter methods using the same SearchFilter
  const filterMethod = (query, data) => {
    const filtered = query.length
      ? data.filter((item) => {
          return item.includes(query.toLowerCase());
        })
      : [];
    return filtered;
  };

  return (
    <SearchFilter
      filterMethod={filterMethod}
      data={data}
      render={({ results, onChangeHandler, queryString }) => {
        return (
          <>
            {/* separation of concerns - input and filter is not the same thing... 
            //thats why its not baked inside a SearchFilter which is a helper function */}
            <input onChange={onChangeHandler} value={queryString} />
            {results.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </>
        );
      }}
    />
  );
};
