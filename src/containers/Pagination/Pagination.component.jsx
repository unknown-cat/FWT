import React from 'react';
import { useGlobalContext } from '../../context';
import {
  ButtonWrapper,
  PaginationWrapper,
  FirstPageIcon,
  PrevPageIcon,
  NextPageIcon,
  LastPageIcon,
} from './pagination.styles';

const Pagination = () => {
  const { isLoading, data, setPage, page } = useGlobalContext();

  if (!data.length) {
    return (
      <PaginationWrapper style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>There is no matches!</h2>
      </PaginationWrapper>
    );
  }

  return (
    <PaginationWrapper>
      {!isLoading && (
        <ButtonWrapper>
          <button
            type='button'
            disabled={page ? 0 : 1}
            onClick={() => setPage(0)}
          >
            <FirstPageIcon />
          </button>
          <button
            type='button'
            disabled={page ? 0 : 1}
            onClick={() => setPage(page - 1)}
          >
            <PrevPageIcon />
          </button>
          {data.map((_, i) => (
            <button
              className={i === page ? `active-btn` : null}
              key={i}
              type='button'
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          ))}
          <button
            type='button'
            disabled={page === data.length - 1 ? 1 : 0}
            onClick={() => setPage(page + 1)}
          >
            <NextPageIcon />
          </button>
          <button
            type='button'
            disabled={page === data.length - 1 ? 1 : 0}
            onClick={() => setPage(data.length - 1)}
          >
            <LastPageIcon />
          </button>
        </ButtonWrapper>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
