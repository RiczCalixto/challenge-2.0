import { gql } from 'apollo-boost';

const GET_POKEMONS_LIST = gql`
  query {
    pokemons(first: 50) {
      image
      number
      name
    }
  }
`;

export default GET_POKEMONS_LIST;
