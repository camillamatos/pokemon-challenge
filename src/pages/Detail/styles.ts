import styled from 'styled-components';

export const BackButton = styled.button`
  margin: 30px 0 0 40px;
  border: none;
  color: #ff9000;
  background: transparent;
  font-size: 24px;
  font-family: Roboto Slab;
  display: flex;
  text-align: center;
  cursor: pointer;

  svg {
    height: 32px;
    width: 32px;
    margin-right: 8px;
  }
`;

export const Container = styled.div`
  margin: 0 auto 10px auto;
  position: relative;
  background: #3e3b47;
  border-radius: 8px;
  height: 484px;
  width: 320px;
  text-align: center;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    margin-top: 24px;
  }
`;

export const NumberText = styled.p`
  font-family: Roboto Slab;
  font-size: 24px;
  color: #666360;
  position: absolute;
  top: 12px;
  left: 24px;
`;

export const Name = styled.h2`
  font-family: Roboto Slab;
  font-size: 24px;
  color: #ff9000;
  margin-top: 10px;
`;

export const Infos = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-around;

  div p {
    color: #f4ede8;
    font-size: 24px;
    font-family: Roboto Slab;
  }

  div span {
    color: #666360;
    font-size: 16px;
    font-family: Roboto Slab;
  }
`;

export const StatsTitle = styled.p`
  font-family: Roboto Slab;
  font-size: 22px;
  color: #f4ede8;
  font-weight: 500;
`;

export const StatsInfo = styled.div`
  margin: 0 25px;

  div {
    display: flex;
    width: 242px;
    margin-top: 12px;

    p {
      width: 40px;
      text-align: left;
    }

    div {
      height: 24px;
      border-radius: 20px;
      background: #c4c4c4;
      margin-top: 0px;

      p {
        position: absolute;
        right: 5px;
      }

      div {
        background: #ff9001;
        width: 50%;
        position: relative;
      }
    }
  }

  p {
    font-family: Roboto Slab;
    font-size: 16px;
    color: #f4ede8;
    margin-right: 10px;
  }
`;

export const Title = styled.h3`
  font-family: Roboto Slab;
  font-size: 28px;
  color: #f4ede8;
  font-weight: 400;
  margin-left: 40px;
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px 80px 20px;
`;
