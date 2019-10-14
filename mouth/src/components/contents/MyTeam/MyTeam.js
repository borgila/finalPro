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
         <div className="carrousel-teams">
          {this.state.myRoster.map((team, idx) => {
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

{
  /* <div>
{" "}
<img
  src="https://sportshub.cbsistatic.com/i/r/2018/12/17/3d6319cc-1340-486d-bbc1-48a99b3923e7/thumbnail/1200x675/789f22e2bcf6c43e36a758763020ab39/stephen-curry.jpg"
  alt="Curry"
/>
</div>
<div>
{" "}
<img
  src="https://clutchpoints.com/wp-content/uploads/2019/09/ESPN-ranks-LeBron-James-No.-3-in-the-NBA.jpg"
  alt="Lebron"
/>
</div>
<div>
{" "}
<img
  src="https://cdn.vox-cdn.com/thumbor/KKIfzY3jGLNpCWR4RlAk4I7b74A=/0x35:650x900/1200x800/filters:focal(240x190:344x294)/cdn.vox-cdn.com/uploads/chorus_image/image/65404585/KD_at_the_park.0.jpg"
  alt="Durant"
/>
</div> */
}
