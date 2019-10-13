import React, { Component } from "react";

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
              <div>
                <img
                  onClick={() => this.props.selectPlayer(player)}
                  src={player.PhotoUrl}
                  alt=""
                />
              </div>
              <p>{player.Name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
