import styled from 'styled-components';
import { Wrapper } from '../../globalStyles';

export const AuthorWrapper = styled(Wrapper)`
  .custom-select {
    &__control {
      padding: 9px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.searchBg};
      border: 1px solid ${({ theme }) => theme.searchBorder};
      cursor: pointer;

      &:hover {
        border-color: ${({ theme }) => theme.border};
      }
    }

    &__placeholder,
    &__input-container {
      color: ${({ theme }) => theme.txt};
    }

    &__single-value {
      color: ${({ theme }) => theme.txt};
    }

    &__indicator {
      cursor: pointer;
    }

    &__indicator-separator {
      width: 0;
    }

    &__clear-indicator {
      padding: 6px 0;

      & svg {
        width: 15px;
        height: 15px;
      }
    }

    &__menu {
      top: 70%;
      overflow-x: hidden;
      box-shadow: unset;
      background-color: ${({ theme }) => theme.searchBg};
      border: 1px solid ${({ theme }) => theme.searchBorder};
      color: ${({ theme }) => theme.txt};
      z-index: 2;
    }

    &__option {
      text-overflow: ellipsis;
      overflow-x: clip;
      white-space: nowrap;
    }

    &__option--is-hovered,
    &__option--is-selected {
      background-color: ${({ theme }) => theme.txt};
      color: ${({ theme }) => theme.bg};
    }

    &__option--is-focused {
      background-color: ${({ theme }) => theme.txt};
      color: ${({ theme }) => theme.bg};
    }

    &__option:active {
      background-color: ${({ theme }) => theme.txt};
      color: ${({ theme }) => theme.bg};
    }
  }

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;
