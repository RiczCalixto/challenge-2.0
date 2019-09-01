import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_POKEMON_DETAIL = gql`
  query {
    pokemon(name: "Charmander") {
      image
      name
      attacks {
        special {
          name
        }
      }
    }
  }
`;

const Details = () => {
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL);

  console.log(data);
  const { pokemon } = data;
  console.log(pokemon);

  if (loading) return <h1>Carregando ...</h1>;
  if (error) return <h1>Erro ... =(</h1>;

  return (
    <>
      Hello from detail page!
      <Link to="/" style={{ color: 'white' }}>
        Retornar para a lista.
      </Link>
    </>
  );
};

export default Details;
