import React from 'react';


export default class PokemonTeam extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                PokemonTeam: []
            }
        }

    //  get random pokemon number

  

    async componentDidMount() {


      function  getRandomPokemonId() {
            return Math.floor(Math.random() * 1025) + 1;
        }

        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()).catch(error => error);
        let data = await response.json();
        console.log(data.name);
        this.setState({PokemonTeam: [...this.state.PokemonTeam, data] })
    }

    render() {
        return (
            <div>
                <h1>Pokemon data here</h1>
                {this.state.PokemonTeam && this.state.PokemonTeam.map(pokemon => {
                    return <h1 key={pokemon.name} >{pokemon.name}</h1>
                })}
            </div>
        );
    }

}