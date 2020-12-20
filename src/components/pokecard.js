import React from 'react'
import './pokecard.css'

export class Pokecard extends React.Component {
    render() {
        return (
            <div key={this.props.id} className='pokemon'>
                <h3>{this.props.name}</h3>
                <img src={this.props.image} />
                <p>Type: {this.props.type}</p>
            </div>
        )
    }
}

Pokecard.defaultProps = {
    pokemon: [
        {
            id: 1,
            name: "Charmander",
            type: "fire",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            id: 2,
            name: "Squirtle",
            type: "water",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            id: 3,
            name: "Butterfree",
            type: "flying",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
        },
        {
            id: 4,
            name: "Rattata",
            type: "normal",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
        },
        {
            id: 5,
            name: "Metapod",
            type: "bug",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
        }
    ]
}  