import { useState } from 'react';
import PokemonList from './components/PokemonList/pokemonList.jsx'

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      { <PokemonList /> }
    </>
  );
}

export default App;
