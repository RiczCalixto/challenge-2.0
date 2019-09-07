import { gql } from 'apollo-boost';

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

export default GET_POKEMON_DETAIL;
