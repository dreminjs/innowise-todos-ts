import { useState } from "react";

export const usePagination = () => {
  const [skip, setSkip] = useState(0);

  const limit = 10;

  const handleChangePage = (page: number) => {
    setSkip(page * limit);
  };

  return {
    onChangePage: handleChangePage,
    skip,
    limit,
  };
};
