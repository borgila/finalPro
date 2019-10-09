import React, { Component } from "react";
import "./Searchplayer.css";
import TeamService from "./TeamService";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
export default class SearchPlayer extends Component {
  constructor(props) {
    super(props);
    this.teamService = new TeamService();
    this.state = {
      teams: [],
      selectedTeam: null
    };
  }

  componentDidMount() {
    this.teamService.getAllTeams().then(data =>
      this.setState({
        ...this.state,
        teams: data.allTeams
      })
    );

    // this.getTeam = teamCode => {
    //    this.teamService.getOneTeam(teamCode.keyCode).then(data =>{
    //      this.setState({
    //       ...this.state,
    //         selectedTeam: data
    //       })
    //    }
    //   );
    // };
  }

  selectTeam = team => {
    this.setState({ ...this.state, selectedTeam: team });
  };

  render() {
    // console.log(this.state.teams);
    return (
      <div className="main">
        <UserCard></UserCard>
        <div className="carrousel-teams">
          {this.state.teams.map((team, idx) => {
            return (
              <div
                key={idx}
                onClick={() => this.selectTeam(team)}
                className="carrousel-teams-item"
              >
                <img className="img-team" src={team.WikipediaLogoUrl} alt="#" />
              </div>
            );
          })}
        </div>
        {this.state.selectedTeam ? (
          <img
            className="img-team"
            src={this.state.selectedTeam.WikipediaLogoUrl}
            alt="#"
          />
        ) : null}
        );
        <div className="carrousel-players">
          <div className="carrousel-players-wrapper"></div>
        </div>
      </div>
    );
  }
}
