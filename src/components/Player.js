import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    hs: PropTypes.bool,
  };

  render() {
    const { name, id, score, index, changeScore, removePlayer, hs } =
      this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          <Icon hs={hs}/>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
