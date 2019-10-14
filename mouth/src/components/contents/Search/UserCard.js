import React, { Component } from "react";
import "./UserCard.css";
import Axios from "axios";
import AuthService from "../../../components/auth/AuthService";

export default class UserCard extends Component {
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
        res=res.data
        console.log(res.data)
      });
    });
  };
  render() {
    const { Name, PhotoUrl, _id } = this.state.selectedPlayer;
    
    // console.log(this.state.selectedPlayer)
    return (
      <div className="Usercard-container">
        <div>{Name}</div>
        <img src={PhotoUrl} alt="avatar" />
        <button
          onClick={(e, _id) => this.addPlayer(e, this.state.selectedPlayer._id)}
        >
          Add player
        </button>
      </div>
    );
  }
}

// import React from 'react'

// import "./UserCard.css"

// export const UserCard = props => {
//     const { Name, PhotoUrl } = props.selectedPlayer
//     return (
//       <div className="Usercard-container">
//         <div>{Name}</div>
//         <img src={PhotoUrl} alt="avatar"/>
//       </div>
//     )
// }
