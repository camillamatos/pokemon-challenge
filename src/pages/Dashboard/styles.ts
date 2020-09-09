import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 40px;
`;

export const SearchInput = styled.div`
  background: #232129;
  border-radius: 10px;
  height: 56px;
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;

  svg {
    width: 28px;
    height: 28px;
    color: #666360;
    margin-left: 20px;
  }

  input {
    font-family: Roboto Slab;
    background: #232129;
    border: none;
    width: 100%;
    margin-left: 10px;
    color: #666360;
    font-size: 18px;
  }

  input::placeholder {
    color: #666360;
    font-size: 18px;
  }
`;

export const PokemonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: center;
`;

export const Pagination = styled.div`
  display: flex;
  margin: 10px 60px;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }
`;
