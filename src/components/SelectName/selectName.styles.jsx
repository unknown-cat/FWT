import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  color: ${({ theme }) => theme.txt};
  background: ${({ theme }) => theme.searchBg};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.searchBorder};

  &-internal-autofill-selected {
    background: #000;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.border};
  }
`;

export const InputWrapper = styled.div``;
