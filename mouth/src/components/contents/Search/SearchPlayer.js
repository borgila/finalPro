import React, { Component } from "react";
import "./Searchplayer.css";
import TeamService from "./TeamService";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";
import TableTeams from "./TableTeams";
import TablePlayers from "./TablePlayers";
import Chart from "../chart/Chart.js";
import Select from "../Select/Select";
import ChartBox from "../chart/ChartBox";


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
      validationError: ""
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
    this.setState({ ...this.state, selectedPlayer: player });
  };
  selectStat = stat => {
    console.log("GIMMMMEEEEE SOME")
    this.setState({ ...this.state, selectedStat: stat });
  };
  render() {
    return (
      <div className="main">
        <UserCard></UserCard>
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
        <Select selectedPlayer={this.state.selectedPlayer}
        validationError={this.state.validationError}
        playerStats={this.state.playerStats}
        selectStat={stat => this.selectStat(stat)}
        />

        <Chart selectStat={stat => this.selectStat(stat)}/>
        {/* <ChartBox selectedPlayer={this.state.selectedPlayer}
        validationError={this.state.validationError}
        playerStats={this.state.playerStats} */}

        />
      </div>
    );
  }
}
