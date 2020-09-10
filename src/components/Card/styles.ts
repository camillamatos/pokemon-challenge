import styled from 'styled-components';

export const Container = styled.button`
  margin: 20px;
  border: none;
  border-radius: 8px;
  background: #3e3b47;
  height: 294px;
  width: 320px;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  img {
    height: 150px;
    width: 150px;
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
