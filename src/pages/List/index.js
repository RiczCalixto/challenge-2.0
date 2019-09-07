import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { Container } from './listStyles';

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
  const { pokemons } = data;

  if (error) return <h1>Erro ... =(</h1>;

  return (
    <Container>
      {loading ? (
        <div>Carregando ...</div>
      ) : (
        pokemons.map(pokemon => (
          <div key={pokemon.number}>
            <img src={pokemon.image} alt={pokemon.name} />
            <span>
              {pokemon.number} {pokemon.name}
            </span>
            <br />
            <Link to={`/details/${pokemon.name}`} style={{ color: 'white' }}>
              Visualizar este pokemon
            </Link>
          </div>
        ))
      )}
    </Container>
  );
};

export default List;
