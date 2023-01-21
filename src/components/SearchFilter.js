export const SearchFilter = ({ render, filterMethod, query, data }) => {
  //order is important
  const results = filterMethod(query, data);

  return render({ results });
};
