import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./UserCard.css";
import Axios from "axios";
import AuthService from "../../../components/auth/AuthService";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayer: this.props.selectedPlayer
    };
    this.authService = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    // debugger
    this.setState({
      ...this.state,
      selectedPlayer: nextProps.selectedPlayer
    });
  }

  addPlayer = (e, selectedPlayer) => {
    // debugger
    e.preventDefault();
    this.authService.loggedin().then(currentUser => {
      Axios.post(
        "http://localhost:4000/api/search/addOnePlayer/" +
          selectedPlayer +
          "/" +
          currentUser._id
      ).then(res => {
        res = res.data;
        console.log(res.data);
      });
    });
    this.props.history.push("/myTeam");
  };
  render() {
    const { Name, PhotoUrl, _id, Position, Team } = this.state.selectedPlayer;

    // console.log(this.state.selectedPlayer)
    return (
      <React.Fragment>
        <div className="Usercard-container">
        <h5 className="user-team">{Team}</h5>
          <img src={PhotoUrl} alt="avatar" />
          <div>{Name}</div>
          <h4 className="user-position">{Position}</h4>
          <button className="button"
            onClick={(e, _id) =>
              this.addPlayer(e, this.state.selectedPlayer._id)
            }
          >
            Follow this player
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(UserCard);
