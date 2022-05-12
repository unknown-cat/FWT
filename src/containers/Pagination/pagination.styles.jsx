import styled from 'styled-components';
import { ReactComponent as Chevron } from '../../assets/single-chevron.svg';
import { ReactComponent as DoubleChevron } from '../../assets/double-chevron.svg';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90vw;
  max-width: 1170px;
  min-height: 70px;
  margin: 0 auto 3rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 41px;
    height: 41px;
    border: 1px solid ${({ theme }) => theme.txt};
    border-left: 0.1px;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.txt};
    font-size: 18px;
    transition: background-color 0.5s ease;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.buttonHover};
    }
  }

  button:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-left: 1px solid ${({ theme }) => theme.txt};
  }

  button:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  button:disabled,
  button[disabled] {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.searchBorder};
    color: ${({ theme }) => theme.searchBorder};
    pointer-events: none;

    svg {
      fill: ${({ theme }) => theme.searchBorder};
    }
  }

  .active-btn {
    background-color: ${({ theme }) => theme.txt};
    color: ${({ theme }) => theme.bg};
    pointer-events: none;
  }
`;

export const PrevPageIcon = styled(Chevron)`
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.txt};
`;

export const FirstPageIcon = styled(DoubleChevron)`
  transform: rotate(180deg);
  fill: ${({ theme }) => theme.txt};
`;

export const NextPageIcon = styled(Chevron)`
  fill: ${({ theme }) => theme.txt};
`;

export const LastPageIcon = styled(DoubleChevron)`
  fill: ${({ theme }) => theme.txt};
`;
