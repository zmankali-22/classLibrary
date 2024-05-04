import React from 'react';


export default class PokemonTeam extends React.Component {

 

    //  get random pokemon number

     getRandomPokemonId() {
        return Math.floor(Math.random() * 1025) + 1;
    }

    async componentDidMount() {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.getRandomPokemonId()).catch(error => error);
        let data = await response.json();
        console.log(data.name);
    }

    render() {
        return (
            <div>
                <h1>Pokemon data here</h1>
            </div>
        );
    }

}