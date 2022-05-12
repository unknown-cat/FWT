import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 1170px;
  min-height: 70px;
  margin: 5rem auto 2.5rem;
`;

export const FormList = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
