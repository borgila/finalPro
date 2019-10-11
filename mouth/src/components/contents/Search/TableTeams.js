import React, { Component } from 'react'

export default class TableTeams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      selectedTeam: null
    };
  }
  
  componentWillReceiveProps(nextProps){
    this.setState({
      ...this.state,
      teams: nextProps.teams
    })
  }

  render() {
    return (
      <div>
         <div className="carrousel-teams">
          {this.state.teams.map((team, idx) => {
            return (
              <div
                key={idx}
                onClick={() => this.props.selectTeam(team)}
                className="carrousel-teams-item"
              >
                <img className="img-team" src={team.WikipediaLogoUrl} alt="#" />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}
