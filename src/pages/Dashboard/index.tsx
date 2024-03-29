import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import {
  Container,
  SearchInput,
  PokemonList,
  Pagination,
  Button,
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

import api from '../../services/api';

interface IPokemon {
  name: string;
}

function Dashboard() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]);
  const [name, setName] = useState('');

  const [page, setPage] = useState(0);
  const [next, setNext] = useState();
  const [previous, setPrevious] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    api.get('/pokemon/?offset=0&limit=1060').then(response => {
      setAllPokemons(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (!name) {
      api.get(`/pokemon/?offset=${page}&limit=20`).then(async response => {
        setPokemons(response.data.results);

        setNext(response.data.next);
        setPrevious(response.data.previous);
      });
    } else {
      const result = allPokemons.filter(pokemon =>
        pokemon.name.includes(name.toLowerCase()),
      );
      setPokemons(result);

      setNext(undefined);
      setPrevious(undefined);
    }
  }, [page, name, allPokemons]);

  const navigateToDetail = useCallback(
    (pokemon: IPokemon) => {
      navigate(`/${pokemon.name}`);
    },
    [navigate],
  );

  const handleNextPage = useCallback(() => {
    if (next) {
      setPage(page + 20);
    }
  }, [page, next]);

  const handlePreviousPage = useCallback(() => {
    if (previous) {
      setPage(page - 20);
    }
  }, [page, previous]);

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
      <PokemonList data-testid="pokemon">
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            onClick={() => navigateToDetail(pokemon)}
          />
        ))}
      </PokemonList>

      <Pagination>
        <Button onClick={handlePreviousPage}>
          {previous && <FiChevronLeft color="#666360" />}
        </Button>
        <Button onClick={handleNextPage}>
          {next && <FiChevronRight color="#666360" />}
        </Button>
      </Pagination>
    </>
  );
}

export default Dashboard;
