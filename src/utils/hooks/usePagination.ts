import { useCallback, useState } from 'react';

const usePagination = (
  rowPerPage: number
): [
  (dataLength: number) => void,
  () => void,
  {
    // isFirstPage: boolean;
    // isLastPage: boolean;
    currentPage: number;
  }
] => {
  const [page, setPage] = useState(1);

  const handleNextPageClick = useCallback(
    (dataLength: number) => {
      console.log('page', page);
      console.log('dataLength', dataLength);

      const current = page;
      const next = current + 1;
      console.log(dataLength <= rowPerPage ? next : current);
      setPage(dataLength <= rowPerPage ? next : current);
    },
    [page, rowPerPage]
  );

  const handlePrevPageClick = useCallback(() => {
    const current = page;
    const prev = current - 1;

    setPage(prev > 0 ? prev : current);
  }, [page]);

  return [
    handleNextPageClick,
    handlePrevPageClick,
    {
      currentPage: page,
    },
  ];
};

export default usePagination;
