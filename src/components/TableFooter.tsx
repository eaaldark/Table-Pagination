import React, { useEffect } from 'react';

const TableFooter = ({
  range,
  setPage,
  page,
  slice,
}: {
  range: any[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: number;
}) => {
  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < range.length - 1) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={'pagination'}>
      <button onClick={goToPreviousPage} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {range.length - 1}
      </span>
      <button onClick={goToNextPage} disabled={page === range.length - 1}>
        Next
      </button>
    </div>
  );
};

export default TableFooter;