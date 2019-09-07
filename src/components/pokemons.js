import React from 'react';
import { Link } from 'react-router-dom';

const Pokemons = ({ pokemons }) => {
  return pokemons.map(pokemon => (
    <div key={pokemon.number}>
      <img src={pokemon.image} alt={pokemon.name} />
      <Link to={`/details/${pokemon.name}`}>
        <span>
          {pokemon.number} {pokemon.name}
        </span>
      </Link>
    </div>
  ));
};

export default Pokemons;
