import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Title } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Pokemon Challenge" />
      <Title>POKÉMON CHALLENGE</Title>
    </Container>
  );
};

export default Header;
