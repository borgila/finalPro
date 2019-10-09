import React, { Component } from 'react'
import axios from 'axios';
import PlayerService from "./PlayerService";
import "./UserCard.css"


export default class Player extends Component {
  constructor(props) {
    super(props);
    this.PlayerService = new PlayerService();
    this.state = {
      players: [],
      selectedPlayer: []
    };
  }
  render() {
    return (
      <div className="Usercard-container">
        <div>mi jugador</div>
      </div>
    )
  }
}
