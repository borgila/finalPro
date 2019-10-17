import React, { Component } from "react";
import "./TableTeam.css";
import TeamService from "./TeamService";

export default class TableTeams extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     teams: this.props.teams,
  //     selectedTeam: null,
  //     value: "",
  //     soughtPlayer: []
  //   };
  //   this.service = new TeamService();
  // }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     ...this.state,
  //     teams: nextProps.teams
  //   });
  // }

  render() {
    return (
      <React.Fragment>
        <div className="table-teams">
          {this.props.teams.map((team, idx) => {
            return (
              <div
                key={idx}
                onClick={() => this.props.selectTeam(team)}
                className="table-teams-item"
              >
                <img className="img-team" src={team.WikipediaLogoUrl} alt="#" />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
