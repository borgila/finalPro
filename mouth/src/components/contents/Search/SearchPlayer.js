import React, { Component } from "react";
import "./Searchplayer.css";
import TeamService from "./TeamService";
import { UserCard } from "./UserCard";
import TableTeams from "./TableTeams";
import TablePlayers from "./TablePlayers";
import Chart from "../chart/Chart.js";


export default class SearchPlayer extends Component {
  constructor(props) {
    super(props);
    this.teamService = new TeamService();
    this.state = {
      teams: [],
      selectedTeam: null,
      teamsVisible: true,
      selectedPlayer: null,
      playerStats: [],
      selectedStat: null,
      validationError: "",
      defaultPlayer: {
        Name: "Player",

        PhotoUrl: require("../../../icons/player_default.png")
      }
    };
  }

  componentDidMount() {
    this.teamService.getAllTeams().then(data =>
      this.setState({
        ...this.state,
        teams: data.allTeams
      })
    );
  }

  selectTeam = team => {
    this.setState(
      { ...this.state, selectedTeam: team, teamsVisible: false }
      // () => console.log(this.state.selectedTeam)
    );
  };

  selectPlayer = player => {
    this.setState({ ...this.state, selectedPlayer: player }, () =>
      console.log(this.state.selectedPlayer)
    );
  };
  selectStat = stat => {
    this.setState({ ...this.state, selectedStat: stat });
  };
  render() {
    return (
      <div className="main">
        {this.state.selectedPlayer !== null ? (
          <UserCard selectedPlayer={this.state.selectedPlayer}></UserCard>
        ) : (
          <UserCard selectedPlayer={this.state.defaultPlayer}></UserCard>
        )}
        {this.state.teamsVisible ? (
          <TableTeams
            teams={this.state.teams}
            selectTeam={team => this.selectTeam(team)}
          />
        ) : (
          <TablePlayers
            oneTeam={this.state.selectedTeam}
            selectPlayer={player => this.selectPlayer(player)}
          />
          
        )}

        {this.state.selectedPlayer !== null && (
          <Chart selectedPlayer={this.state.selectedPlayer} />
        )}
      </div>
    );
  }
}
