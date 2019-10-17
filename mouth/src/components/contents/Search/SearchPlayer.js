import React, { Component } from "react";
import "./Searchplayer.css";
import TeamService from "./TeamService";
import UserCard from "./UserCard";
import TableTeams from "./TableTeams";
import TablePlayers from "./TablePlayers";
import Chart from "../chart/Chart.js";
import Carru from "./Carru";
import SoughtPlayers from "./SoughtPlayers";

export default class SearchPlayer extends Component {
  constructor(props) {
    super(props);
    this.teamService = new TeamService();
    this.state = {
      allPlayers: [],
      teams: [],
      selectedTeam: null,
      teamsVisible: true,
      selectedPlayer: null,
      playerStats: [],
      selectedStat: null,
      value: "",
      soughtPlayers: [],
      validationError: "",
      defaultPlayer: {
        Name: "Player",
        _id: 6969,
        PhotoUrl: require("../../../icons/player_default.png")
      }
    };
  }

  componentDidMount() {
    let allPlayersArr = [];
    this.teamService.getAllTeams().then(data => {
      data.allTeams.forEach(element => {
        allPlayersArr.push(element.Players);
      });
      allPlayersArr = allPlayersArr.flat();
      this.setState({
        ...this.state,
        allPlayers: allPlayersArr,
        teams: data.allTeams
      });
    });
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
  changeValue(e) {
    let searchWord = e.target.value;
    let foundPLayers = this.state.allPlayers.filter(player =>
      player.Name.toLowerCase().includes(searchWord.toLowerCase())
    );
    this.setState(
      { ...this.state, value: searchWord, soughtPlayers: foundPLayers },
      () => {
        console.log(
          this.state.soughtPlayers.length > 300 ||
            this.state.soughtPlayers.length == 0
        );
      }
    );
  }
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          onChange={e => this.changeValue(e)}
          placeholder="Search player"
          type="text"
        ></input>
        {/* <h3>{this.state.value}</h3> */}
        <div className="main">
          <div className="user-chart">
            {this.state.selectedPlayer !== null ? (
              <UserCard selectedPlayer={this.state.selectedPlayer}></UserCard>
            ) : (
              <UserCard selectedPlayer={this.state.defaultPlayer}></UserCard>
            )}
            <div className="chart-main">
              <div className="chart-wrapper">
                {this.state.selectedPlayer !== null && (
                  <Chart selectedPlayer={this.state.selectedPlayer} />
                )}
              </div>
            </div>
          </div>

          {this.state.soughtPlayers.length > 300 ||
          this.state.soughtPlayers.length === 0 ? (
            this.state.teamsVisible ? (
              <TableTeams
                teams={this.state.teams}
                selectTeam={team => this.selectTeam(team)}
              />
            ) : (
              <div className="Carrousel-main">
                <Carru
                  teams={this.state.teams}
                  selectTeam={team => this.selectTeam(team)}
                />
                <TablePlayers
                  oneTeam={this.state.selectedTeam}
                  selectPlayer={player => this.selectPlayer(player)}
                />
              </div>
            )
          ) : (
            <SoughtPlayers
              soughtPlayers={this.state.soughtPlayers}
              selectPlayer={player => this.selectPlayer(player)}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}
