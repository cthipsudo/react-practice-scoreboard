import React, { Component } from "react";

import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1,
        hs: false,
      },
      {
        name: "Treasure",
        score: 0,
        id: 2,
        hs: false,
      },
      {
        name: "Ashley",
        score: 0,
        id: 3,
        hs: false,
      },
      {
        name: "James",
        score: 0,
        id: 4,
        hs: false,
      },
    ],
    // highest score
    highestScore: 0,
  };

  // player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta)
    }))
  };

  handleHighScore = () => {
    const scores = this.state.players.map( player => player.score)
    const highScore = Math.max(...scores);
    if(highScore) {
      return highScore;
    }
    return null;
  }

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: (this.prevPlayerId += 1),
          },
        ],
      };
    });
  };

  render() {
    const highScore = this.handleHighScore();
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
            hs={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
