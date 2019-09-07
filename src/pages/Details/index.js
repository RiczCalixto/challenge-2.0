import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './detailStyles';
import Loading from '../../components/loading';
import Error from '../../components/error';
import GET_POKEMON_DETAIL from '../../queries/pkDetail';
import Pokemon from '../../components/pokemon';

const Details = ({ match }) => {
  const { name } = match.params;
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name },
  });
  const { pokemon } = data;

  if (error)
    return (
      <Container>
        <Error />
      </Container>
    );

  if (loading)
    return (
      <Container>
        <Loading />
      </Container>
    );

  return (
    <Container>
      <Pokemon pokemon={pokemon} />
    </Container>
  );
};

export default Details;
