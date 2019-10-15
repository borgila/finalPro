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

  render() {
    return (
      <div>
      <Link to={`/`}>Home</Link>
        <div>
          {this.state.myRoster.map((dude, idx) => {
            return (
              <div key={idx}>
                <img src={dude.PhotoUrl} />
                <p>{dude.Name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

