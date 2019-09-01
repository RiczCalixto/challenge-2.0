import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

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

  if (loading) return <h1>Carregando ...</h1>;
  if (error) return <h1>Erro ... =(</h1>;

  return (
    <>
      <ul>
        {pokemons.map(pokemon => (
          <div key={pokemon.number}>
            <img src={pokemon.image} alt={pokemon.name} />
            <li>
              {pokemon.number} {pokemon.name}
            </li>
            <Link to={`/details/${pokemon.name}`} style={{ color: 'white' }}>
              Visualizar este pokemon.
            </Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default List;
