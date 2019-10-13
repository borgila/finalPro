import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./myTeam.css"

export default class MyTeam extends Component {
  render() {
    return (
      <div className="team-container">
        <Link to={`/`}>Back to Search Player</Link>
        <h1>My team</h1>
        <div> <img src="https://sportshub.cbsistatic.com/i/r/2018/12/17/3d6319cc-1340-486d-bbc1-48a99b3923e7/thumbnail/1200x675/789f22e2bcf6c43e36a758763020ab39/stephen-curry.jpg" alt="Curry" /></div>
        <div> <img src="https://clutchpoints.com/wp-content/uploads/2019/09/ESPN-ranks-LeBron-James-No.-3-in-the-NBA.jpg" alt="Lebron" /></div>
        <div> <img src="https://cdn.vox-cdn.com/thumbor/KKIfzY3jGLNpCWR4RlAk4I7b74A=/0x35:650x900/1200x800/filters:focal(240x190:344x294)/cdn.vox-cdn.com/uploads/chorus_image/image/65404585/KD_at_the_park.0.jpg" alt="Durant" /></div>
        
      </div>
    );
  }
}
