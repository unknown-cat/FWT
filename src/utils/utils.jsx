export const paginate = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newData = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  });

  return newData;
};

export const handleChange = (e, func, str = '') => {
  if (e === null) return func('');
  func(`${str}` + e.value);
};
