import React from 'react';

import { Container, Title } from './styles';

import logo from 'src/assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Pokemon Challenge" />
      <Title>POKÉMON CHALLENGE</Title>
    </Container>
  );
};

export default Header;
