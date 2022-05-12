import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-gap: 2rem;
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  padding-bottom: 2.5rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }

  @media screen and (min-width: 1023px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (min-width: 1365px) {
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  }
`;
