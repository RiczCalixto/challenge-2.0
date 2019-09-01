import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_POKEMONS_LIST = gql`
  query {
    pokemons(first: 50) {
      image
      number
      name
    }
  }
`;

const List = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS_LIST);
  console.log(data);
  console.log(data.pokemons);

  const { pokemons } = data;
  console.log(pokemons);

  if (loading) return <h1>Carregando ...</h1>;
  if (error) return <h1>Erro ... =(</h1>;

  return <>Hello from list !</>;
};

export default List;
