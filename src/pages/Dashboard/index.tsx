import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container, SearchInput, PokemonList } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchInput>
          <FiSearch />
          <input placeholder="Type the Pokémon name" />
        </SearchInput>
      </Container>
      <PokemonList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </PokemonList>
    </>
  );
};

export default Dashboard;
