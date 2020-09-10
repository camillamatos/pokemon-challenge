import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';

import { Container, NumberText, NameText, TypeText } from './styles';

import api from '../../services/api';

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

interface IPokemon {
  id: number;
  name: string;
  types: string;
  img: string;
}

interface IType {
  type: {
    name: string;
  };
}

const Card: React.FC<CardProps> = ({ name, ...rest }) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    api.get(`pokemon/${name}`).then(response => {
      const { id, sprites, types } = response.data;
      const { front_default } = sprites;

      const typeName = types.map((t: IType) => {
        return t.type.name;
      });

      const pokeInfo = {
        id,
        name,
        types: typeName.join(', '),
        img: front_default,
      };

      setPokemon(pokeInfo);
    });
  }, []);

  return (
    <Container type="button" {...rest}>
      <NumberText>
#
{pokemon?.id}
      </NumberText>

      <img src={pokemon?.img} alt="" />

      <NameText>
        <p>Name:</p>
        <span>{pokemon?.name}</span>
      </NameText>

      <TypeText>
        <p>Types:</p>
        <span>{pokemon?.types}</span>
      </TypeText>
    </Container>
  );
};

export default Card;
