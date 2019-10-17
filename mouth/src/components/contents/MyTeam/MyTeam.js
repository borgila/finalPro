import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./myTeam.css";
import TeamService from "../Search/TeamService";

export default class MyTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myRoster: []
    };
    this.service = new TeamService();
  }
  componentDidMount() {
    this.service.showMyTeam().then(myTeam => {
      this.setState({
        ...this.state,
        myRoster: myTeam.myPlayers.followedPlayers
      });
    });
  }

  removePlayer = (e, dude) => {
    this.service.removePlayer(dude._id).then(newRoster => {
      console.log(newRoster);
      this.setState({
        ...this.state,
        myRoster: newRoster.removedPlayer.followedPlayers
      });
    });
  };
// let plStats = [];
  //   for (let key in this.state.selectedPlayer) {
  //     {
  //       plStats = [...plStats, key + ": " + this.state.selectedPlayer[key]];
  //     }
  //   }
  render() {
    console.log(this.state);
    return (
      <div className="myTeam-main">
        <Link to={`/`}>Home</Link>
        <div className="myTeam-container">
          {this.state.myRoster.map((dude, idx) => {
            return (
              <div className="myTeam-item" key={idx}>
                <img src={dude.PhotoUrl} />
                <h2 className="card-name"> {dude.Name}</h2>
                <h3>Position: {dude.Position}</h3>
                <h4>Team: {dude.Team}</h4>
                <h4>Fantasy {dude.FantasyPoints}</h4>
                <button onClick={e => this.removePlayer(e, dude)}>
                  Remove player
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
