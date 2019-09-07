import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './detailStyles';

const GET_POKEMON_DETAIL = gql`
  query($name: String!) {
    pokemon(name: $name) {
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

const Details = ({ match }) => {
  const { name } = match.params;
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
  });
  const { pokemon } = data;

  if (loading) return <h1>Carregando ...</h1>;
  if (error) return <h1>Erro ... =(</h1>;

  return (
    <Container>
      {loading ? (
        <h1>Carregando ...</h1>
      ) : (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} alt={pokemon.name} />
          <ul>
            Ataques especiais:{' '}
            {pokemon.attacks.special.map(atk => (
              <li key={atk.name}>
                {atk.name} <br />
              </li>
            ))}
          </ul>
          <Link to="/">Retornar para a lista.</Link>
        </div>
      )}
    </Container>
  );
};

export default Details;
