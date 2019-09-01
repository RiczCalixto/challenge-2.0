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

  if (loading) return <h1>Carregando ...</h1>;
  if (error) return <h1>Erro ... =(</h1>;

  console.log(pokemon.image);
  console.log(pokemon.name);
  console.log(pokemon.attacks);
  return (
    <>
      <section>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <ul>
          Ataques especiais:{' '}
          {pokemon.attacks.special.map(atk => (
            <li key={atk.name}>{atk.name}</li>
          ))}
        </ul>
      </section>

      <Link to="/" style={{ color: 'white' }}>
        Retornar para a lista.
      </Link>
    </>
  );
};

export default Details;
