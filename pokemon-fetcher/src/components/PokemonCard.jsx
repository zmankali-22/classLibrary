import React from "react";

export default class PokemonCard extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.sprite} alt="Pokemon sprite goes here" />
            </div>
        );
    }
}