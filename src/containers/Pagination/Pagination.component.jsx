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
  const { isLoading, data } = useGlobalContext();

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
          <button type='button'>
            <FirstPageIcon />
          </button>
          <button type='button'>
            <PrevPageIcon />
          </button>
          {data.map((_, i) => (
            <button key={i} type='button'>
              {i + 1}
            </button>
          ))}
          <button type='button'>
            <NextPageIcon />
          </button>
          <button type='button'>
            <LastPageIcon />
          </button>
        </ButtonWrapper>
      )}
    </PaginationWrapper>
  );
};

export default Pagination;
