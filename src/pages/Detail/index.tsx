import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

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
} from './styles';

import Header from '../../components/Header';
import Card from '../../components/Card';

const Detail: React.FC = () => {
  return (
    <>
      <Header />

      <BackButton>
        <FiArrowLeft />
        Back
      </BackButton>

      <Container>
        <NumberText>#1</NumberText>
        <img
          src="https://avatars1.githubusercontent.com/u/40369738?s=460&u=cd827a6e15f953242676b53d9940f77d2706fea4&v=4"
          alt=""
        />

        <Name>Ivysaur</Name>

        <Infos>
          <div>
            <p>69 KG</p>
            <span>Weight</span>
          </div>
          <div>
            <p>0.7 M</p>
            <span>Height</span>
          </div>
        </Infos>

        <StatsTitle>Stats</StatsTitle>

        <StatsInfo>
          <div>
            <p>HP</p>
            <div className="outside">
              <div className="inside">
                <p>56/100</p>
              </div>
            </div>
          </div>
          <div>
            <p>HP</p>
            <div className="outside">
              <div className="inside">
                <p>56/100</p>
              </div>
            </div>
          </div>
          <div>
            <p>HP</p>
            <div className="outside">
              <div className="inside">
                <p>56/100</p>
              </div>
            </div>
          </div>
          <div>
            <p>HP</p>
            <div className="outside">
              <div className="inside">
                <p>56/100</p>
              </div>
            </div>
          </div>
        </StatsInfo>
      </Container>

      <Title>Family Tree</Title>
      <PokemonList>
        <Card />
        <Card />
      </PokemonList>
    </>
  );
};

export default Detail;
