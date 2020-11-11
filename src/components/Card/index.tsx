import React, {
  ButtonHTMLAttributes,
  useEffect,
  useState
} from 'react';

import {
  Container,
  NumberText,
  NameText,
  TypeText
} from './styles';

import api from 'src/services/api';
import IF from 'src/components/IF';

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

interface IResponse {
  data: {
    id: number;
    types: Array<IType>;
    sprites: {
      front_default: string;
    },
    img: string;
  }
}

const Card: React.FC<CardProps> = ({ name, ...rest }: { name: string }) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  useEffect(() => {
    pokemonInformation()
  }, [name]);

  const pokemonInformation = async () => {
    await api.get(`pokemon/${name}`).then(({ data }: IResponse) => {
      const { id, sprites, types } = data;
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
  }

  return (
    <Container type="button" {...rest}>
      <IF test={pokemon?.id}>
        <NumberText>#{pokemon?.id}</NumberText>

        <img src={pokemon?.img} alt={pokemon?.name} />

        <NameText>
          <p>Name:</p>
          <span>{pokemon?.name}</span>
        </NameText>

        <TypeText>
          <p>Types:</p>
          <span>{pokemon?.types}</span>
        </TypeText>
      </IF>
    </Container>
  );
};

export default Card;
