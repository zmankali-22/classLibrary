import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PokemonTeam: [],
    };
  }

  //  get random pokemon number

  async componentDidMount() {
    function getRandomPokemonId() {
      return Math.floor(Math.random() * 1025) + 1;
    }
    for (let i = 0; i < 6; i++) {
      let response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/" + getRandomPokemonId()
      ).catch((error) => error);
      let data = await response.json();
      console.log(data.name);
      this.setState({
        PokemonTeam: [...this.state.PokemonTeam, data],
      });
    }
  }

  componentDidUpdate() {
    console.log("This component has updated and re-rendered")
  }

  render() {
    return (
      <div>
        <h1>Pokemon data here</h1>
        {this.state.PokemonTeam &&
          this.state.PokemonTeam.map((pokemon) => {
            return (
              <PokemonCard
                key={crypto.randomUUID()}
                name={pokemon.name}
                sprite={pokemon.sprites.front_default}
              />
            );
          })}
      </div>
    );
  }
}
