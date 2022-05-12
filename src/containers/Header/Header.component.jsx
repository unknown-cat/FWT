import React from 'react';
import { useGlobalContext } from '../../context';
import { HeaderContainer, MainLogo, ToggleTheme } from './header.styles';

const Header = () => {
  const { toggleTheme } = useGlobalContext();

  return (
    <HeaderContainer>
      <MainLogo />
      <ToggleTheme onClick={toggleTheme}/>
    </HeaderContainer>
  );
};

export default Header;
