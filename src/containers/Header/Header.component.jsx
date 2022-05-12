import React from 'react';
import { HeaderContainer, MainLogo, ToggleTheme } from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <MainLogo />
      <ToggleTheme />
    </HeaderContainer>
  );
};

export default Header;
