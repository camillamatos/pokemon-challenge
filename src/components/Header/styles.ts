import styled from 'styled-components';

export const Container = styled.div`
  background: #28262e;
  display: flex;
  text-align: center;
  height: 116px;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    left: 30px;
  }

  @media (max-width: 500px) {
    img {
      width: 40px;
      height: 40px;
    }

    h1 {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h1`
  color: #e3dada;
  font-family: 'Roboto';
  font-size: 28px;
`;
