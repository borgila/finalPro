import React, { Component } from "react";
import TeamService from "./TeamService";

export default class TablePlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oneTeam: this.props.oneTeam,
      selectedPlayer: null
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      selectedPlayer: nextProps.selectedPlayer
    });
  }

  render() {
    // console.log(this.props.oneTeam)
    return (
      <div>
        {this.state.oneTeam.Players.map((player, idx) => {
          // console.log(player)
          return (
            <div key={idx}>
              <p
                onClick={() => this.props.selectPlayer(player)}
                
              >
                {player.Name}
              </p>
              <div>
                <img src={player.PhotoUrl} alt=""/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
