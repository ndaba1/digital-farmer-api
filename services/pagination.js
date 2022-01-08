function getPagination(query) {
  const page = Math.abs(query.page) || 1;
  const limit = Math.abs(query.limit) || 0;

  const skip = (page - 1) * limit;

  return {
    skip,
    limit,
  };
}

export default getPagination;
