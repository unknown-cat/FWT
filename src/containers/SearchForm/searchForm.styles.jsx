import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 1170px;
  min-height: 70px;
  margin: 5rem auto 2.5rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const FormList = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
