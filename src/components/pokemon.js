import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
  return (
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
  );
};

export default Pokemon;
