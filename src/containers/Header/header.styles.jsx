import styled from 'styled-components';

import { ReactComponent as Logo } from '../../assets/main-logo.svg';
import { ReactComponent as DarkSun } from '../../assets/sun-icon.svg';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 1170px;
  min-height: 70px;
  margin: 5rem auto 3rem;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`;

export const MainLogo = styled(Logo)`
  cursor: pointer;
`;

export const ToggleTheme = styled(DarkSun)`
  fill: ${({ theme }) => theme.txt};
  transition: all 0.25s linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.8);
  }
`;
