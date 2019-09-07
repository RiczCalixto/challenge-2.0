import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container } from './listStyles';
import Pokemons from '../../components/pokemons';
import Loading from '../../components/loading';
import Error from '../../components/error';
import GET_POKEMONS_LIST from '../../queries/pkList';

const List = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS_LIST);
  const { pokemons } = data;

  if (error)
    return (
      <Container>
        <Error error={error} />
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
      <Pokemons pokemons={pokemons} />
    </Container>
  );
};

export default List;
