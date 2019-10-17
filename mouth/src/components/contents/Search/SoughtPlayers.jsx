import React, { Component } from "react";
import "./Sought.css";

export default class SoughtPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPl: this.props.soughtPlayers,
      avatar: require("../../../icons/player_default.png")
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return (state.listPl = props.soughtPlayers);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="sought-container">
          {this.props.soughtPlayers.map((player, idx) => {
            return (
              <div className="sought-search-main" key={idx}>
                <div className="sought-search-wrapper">
                  {player.PhotoUrl ? (
                    <img
                      onClick={() => this.props.selectPlayer(player)}
                      src={player.PhotoUrl}
                      alt={player.Name}
                    />
                  ) : (
                    <img src={this.state.avatar} />
                  )}
                </div>
                <p>{player.Name}</p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
