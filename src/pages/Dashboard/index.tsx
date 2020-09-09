import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import { Container, SearchInput, PokemonList } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

import api from '../../services/api';

interface IPokemon {
  id: number;
  name: string;
  url: string;
  types: string;
}

const Dashboard: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [pokemonsShow, setPokemonsShow] = useState<IPokemon[]>([]);
  const [name, setName] = useState('');

  const history = useHistory();

  useEffect(() => {
    function loadPokemon() {
      api.get('/pokemon').then(response => {
        setPokemons(response.data.results);
      });
    }

    loadPokemon();
  }, []);

  const navigateToDetail = useCallback(() => {
    history.push('Detail');
  }, []);

  useEffect(() => {
    setPokemonsShow([]);

    pokemons.map(pokemon => {
      if (pokemon.name.includes(name)) {
        setPokemonsShow([...pokemonsShow, pokemon]);
      }
    });
  }, [name]);

  return (
    <>
      <Header />
      <Container>
        <SearchInput>
          <FiSearch />
          <input
            placeholder="Type the Pokémon name"
            onChange={e => setName(e.target.value)}
          />
        </SearchInput>
      </Container>
      <PokemonList>
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            types={pokemon.name}
            onClick={navigateToDetail}
          />
        ))}
      </PokemonList>
    </>
  );
};

export default Dashboard;
