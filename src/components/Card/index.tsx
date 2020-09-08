import React from 'react';

import { Container, NumberText, NameText, TypeText } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <NumberText>#1</NumberText>
      <img
        src="https://avatars1.githubusercontent.com/u/40369738?s=460&u=cd827a6e15f953242676b53d9940f77d2706fea4&v=4"
        alt=""
      />

      <NameText>
        <p>Name:</p>
        <span>Bulbassar</span>
      </NameText>

      <TypeText>
        <p>Types:</p>
        <span>Grass</span>
      </TypeText>
    </Container>
  );
};

export default Card;
