import React, { Component } from "react";
import "./TablePlayer.css";
require("../../../icons/player_default.png")

export default class TablePlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneTeam: {},
      avatar:require("../../../icons/player_default.png"),
      
    };
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     ...this.state,
  //     selectedPlayer: nextProps.selectedPlayer
  //   });
  // }

  static getDerivedStateFromProps(props, state) {
    return (state.oneTeam = props.oneTeam);
  }

  render() {
    // console.log(this.props.oneTeam)
    return (
      <React.Fragment>
        <div className="players-container">
          {this.state.oneTeam.Players.map((player, idx) => {
            // console.log(player)
            return (
              <div className="player-search-main" key={idx}>
                <div className="player-search-wrapper" >
                  {player.PhotoUrl ? (
                    <img
                      onClick={() => this.props.selectPlayer(player)}
                      src={player.PhotoUrl}
                      alt={player.Name}

                    />
                  ) : (
                    <img className="default-img" src={this.state.avatar}/>
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
