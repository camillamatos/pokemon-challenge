import React, { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory, useParams, Link } from 'react-router-dom';

import {
  BackButton,
  Container,
  NumberText,
  Name,
  Infos,
  StatsTitle,
  StatsInfo,
  PokemonList,
  Title,
  Stat,
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';
import api from '../../services/api';

interface IPokemon {
  id: number;
  name: string;
  img: string;
  weight: number;
  height: number;
  stats: {
    [label: string]: number;
  };
}

interface IStat {
  base_stat: number;
}

const Detail: React.FC = () => {
  const history = useHistory();
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [family, setFamily] = useState<Array<string>>([]);

  useEffect(() => {
    api.get(`pokemon/${name}`).then(response => {
      const { id, sprites, weight, height, stats, species } = response.data;
      const { front_default } = sprites;

      const specieName = species.name;

      const statsList = stats.map((stat: IStat) => {
        return stat.base_stat;
      });

      const statsValue = {
        hp: statsList[0],
        atk: statsList[1],
        def: statsList[2],
        spd: statsList[5],
      };

      const pokeInfo = {
        id,
        name,
        img: front_default,
        weight,
        height,
        stats: statsValue,
      };

      setPokemon(pokeInfo);

      api.get(`pokemon-species/${specieName}`).then(res => {
        const { url } = res.data.evolution_chain;

        const evolutionId = url.substr(42, 3);

        api.get(`evolution-chain/${evolutionId}`).then(r => {
          const firstPoke = r.data.chain.species.name;
          let evolution = r.data.chain.evolves_to[0];

          const pokeFamily = [firstPoke];

          while (evolution) {
            pokeFamily.push(evolution.species.name);
            evolution = evolution.evolves_to[0];
          }

          const filtered: Array<string> = pokeFamily.filter(
            (p: Array<string>) => p !== name,
          );

          setFamily(filtered);
        });
      });
    });
  }, [name]);

  const backToDashboard = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <>
      <Header />
      <BackButton onClick={backToDashboard}>
        <FiArrowLeft />
        Back
      </BackButton>

      <Container data-testid="container">
        {/* eslint-disable */}
        <NumberText>#{pokemon?.id}</NumberText>
        <img src={pokemon?.img} alt={pokemon?.name} />

        <Name>{pokemon?.name}</Name>

        <Infos>
          <div>
            <p>{pokemon?.weight} KG</p>
            <span>Weight</span>
          </div>
          <div>
            <p>{pokemon?.height} M</p>
            <span>Height</span>
          </div>
        </Infos>

        <StatsTitle>Stats</StatsTitle>

        <StatsInfo>
          <div>
            <p>HP</p>
            <Stat stat={pokemon?.stats.hp}>
              <div>
                <p>
                  {pokemon?.stats.hp}
                  /100
                </p>
              </div>
            </Stat>
          </div>
          <div>
            <p>ATK</p>
            <Stat stat={pokemon?.stats.atk}>
              <div>
                <p>
                  {pokemon?.stats.atk}
                  /100
                </p>
              </div>
            </Stat>
          </div>
          <div>
            <p>DEF</p>
            <Stat stat={pokemon?.stats.def}>
              <div>
                <p>
                  {pokemon?.stats.def}
                  /100
                </p>
              </div>
            </Stat>
          </div>
          <div>
            <p>SPD</p>
            <Stat stat={pokemon?.stats.spd}>
              <div>
                <p>
                  {pokemon?.stats.spd}
                  /100
                </p>
              </div>
            </Stat>
          </div>
        </StatsInfo>
      </Container>

      {(family.length >= 1) && <Title>Family Tree</Title>}

      <PokemonList>
        {family.map(f => (
          <Link to={`/${f}`} key={f}>
            <Card name={f} />
          </Link>
        ))}
      </PokemonList>


    </>
  );
};

export default Detail;
