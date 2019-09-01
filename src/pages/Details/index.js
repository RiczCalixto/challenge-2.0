import React from 'react';
import { Link } from 'react-router-dom';

// const GET_POKEMONS_LIST = gql`
//   query {
//     pokemons(first: 50) {
//       image
//       number
//       name
//     }
//   }
// `;

const Details = () => {
  // const { loading, error, data } = useQuery(GET_POKEMONS_LIST);

  // const { pokemons } = data;

  // if (loading) return <h1>Carregando ...</h1>;
  // if (error) return <h1>Erro ... =(</h1>;

  return (
    <>
      Hello from detail page!
      <Link to="/">Retornar para a lista.</Link>
    </>
  );
};

export default Details;
