const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Player = require("../models/Player");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost/reactAuthentication", {
    useNewUrlParser: true
  })
  .then(x => {
    toDo();
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

function toDo() {
  Player.find().then(allPlayers => {
    allPlayers.map(player => {
      // console.log(player._id)
      Team.findOneAndUpdate({TeamID:player.TeamID},{$push:{Players:player._id}},{new:true})
      .then(()=>{
        console.log("modified")
      })
    });
  });
}
