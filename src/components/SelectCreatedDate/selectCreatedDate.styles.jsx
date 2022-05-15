import styled from 'styled-components';
import { DropDownIcon } from '../../globalStyles';

export const DropDownHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media screen and (max-width: 767px) {
    flex-direction: row;
  }
`;

export const DropDownInputContainer = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.2rem;
  background: ${({ theme }) => theme.searchBg};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-top: none;

  .line {
    width: 12px;
    height: 1px;
    margin: 10px 15px;
    background: ${({ theme }) => theme.txt};
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.searchBg};
  border: 1px solid ${({ theme }) => theme.searchBorder};
  border-radius: 8px;
  overflow: hidden;

  &:hover,
  &:hover ${DropDownInputContainer} {
    border-color: ${({ theme }) => theme.border};
  }

  .open {
    display: '';
  }

  .close {
    display: none;
  }

  //Hide Spinners
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  max-width: 110px;
  color: #000000;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.inputBg};

  &-internal-autofill-selected {
    background: #000000;
  }

  &:hover {
    border-color: ${({ theme }) => theme.txt};
  }

  @media screen and (max-width: 767px) {
    max-width: unset;
    width: 45%;
  }
`;

export const DropDownIconUp = styled(DropDownIcon)`
  fill: ${({ theme }) => theme.searchBorder};
`;
export const DropDownIconDown = styled(DropDownIcon)`
  transform: rotate(180deg);
`;
