import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './pokemonList.css'

function PokemonList() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {

    
    const fetchPokemons = async () => {
      try {
        // Busca lista de pokemons
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const pokemonList = response.data.results

        // Busca detalhes de cada pokemon
        const detailsPromises = pokemonList.map(pokemon =>
          axios.get(pokemon.url).then(res => ({
            name: pokemon.name,
            experience: res.data.base_experience,
            sprite: res.data.sprites.front_default
          }))
        )

        const pokemonsWithExperience = await Promise.all(detailsPromises)
        setPokemons(pokemonsWithExperience)

      } catch (error) {
        console.error(error)
      }
    }

    fetchPokemons()
  }, [])


  return (
    <div className='pokemon-div'>
      <h1>Pokemon List</h1>
      <ul className='pokemon-list'>
        {pokemons.map((pokemon, index) => (
          <li key={index} className='pokemon-item'>
            <img src={pokemon.sprite} alt={pokemon.name}/>
            <h3>{pokemon.name}</h3>
            <p>Exp: {pokemon.experience}</p>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PokemonList