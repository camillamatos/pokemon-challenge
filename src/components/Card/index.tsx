import React, { ButtonHTMLAttributes } from 'react';

import { Container, NumberText, NameText, TypeText } from './styles';

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  types: string;
}

const Card: React.FC<CardProps> = ({ name, types, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      <NumberText>#1</NumberText>
      <img
        src="https://avatars1.githubusercontent.com/u/40369738?s=460&u=cd827a6e15f953242676b53d9940f77d2706fea4&v=4"
        alt=""
      />

      <NameText>
        <p>Name:</p>
        <span>{name}</span>
      </NameText>

      <TypeText>
        <p>Types:</p>
        <span>{types}</span>
      </TypeText>
    </Container>
  );
};

export default Card;
