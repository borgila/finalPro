import React, { Component } from "react";
import "./Carru.css"

export default class Carru extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      selectedTeam: null
    };
  }
  static getDerivedStateFromProps(props, state) {
    return state.teams = props.teams;
  }
  render() {
    return (
      <React.Fragment>
        <div className="carrousel-teams">
          {this.state.teams.map((team, idx) => {
            return (
              <div
                key={idx}
                onClick={() => this.props.selectTeam(team)}
                className="carrousel-teams-item"
              >
                <img className="img-item" src={team.WikipediaLogoUrl} alt="#" />
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
