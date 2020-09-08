import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px;
  border-radius: 8px;
  background: #3e3b47;
  height: 240px;
  width: 320px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;

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

export const NameText = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto Slab;
  font-size: 24px;
  margin-top: 10px;

  p {
    color: #f4ede8;
  }

  span {
    color: #ff9001;
    margin-left: 5px;
  }
`;

export const TypeText = styled.div`
  display: flex;
  font-size: 20px;
  justify-content: center;
  font-family: Roboto Slab;
  margin-top: 26px;

  p {
    color: #f4ede8;
  }

  span {
    color: #ff9001;
    margin-left: 5px;
  }
`;
