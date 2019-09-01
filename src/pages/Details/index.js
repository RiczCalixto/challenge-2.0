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
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Nome: {pokemon.name}</p>
      <ul>
        Ataques especiais:{' '}
        {pokemon.attacks.special.map(atk => (
          <li key={atk.name}>
            {atk.name} <br />
          </li>
        ))}
      </ul>

      <Link to="/" style={{ color: 'white' }}>
        Retornar para a lista.
      </Link>
    </Container>
  );
};

export default Details;
