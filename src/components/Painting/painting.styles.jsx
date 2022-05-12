import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.searchBorder};
`;

export const Section = styled.section`
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  color: #000000;
  background: rgba(255, 255, 255, 0.75);
  transform: translateY(100%);
  transition: all 0.3s linear;
`;

export const Article = styled.article`
  position: relative;
  border-radius: 20px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background-color: ${({ theme }) => theme.searchBorder};

  &:hover > ${Section} {
    bottom: 50%;
  }
`;

export const H3 = styled.h3`
  font-size: 1.1rem;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  font-family: 'Roboto', sans-serif;
  margin: 0.5rem 0;
`;
