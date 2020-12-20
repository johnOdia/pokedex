import React from 'react'
import { Pokecard } from './pokecard'
import './pokedex.css'

export class Pokedex extends React.Component {
    render() {
        const pokemonArray = Pokecard.defaultProps.pokemon
        const allPokemon = pokemonArray.map(pokemon => {
            return(
                <Pokecard key={pokemon.id} name={pokemon.name} image={pokemon.image} type={pokemon.type} />
            )
        })
        return (
            <div className='pokedex'>
                <h1>Pokedex</h1>
                <ul>{allPokemon}</ul>
            </div>
        )
    }
}