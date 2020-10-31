import React from 'react'
import { useQuery } from '@apollo/react-hooks';
// importing our query to get data
import { GET_POKEMONS } from '../graphql/get-pokemons';
import Pokemon from '../components/Pokemon';

const PokemonsContainer = () => {
  // Setting pokemons default to array and data default to empty object
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  return (
    <div className="container">
      {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
    </div>
  )
}

export default PokemonsContainer
