// const express = require("express");
// const router = express.Router();
// const Team = require("../models/Team");
// const Player = require("../models/Player");
// const PlayerDetails = require("../models/PlayerDet");

// const dataPlayersPhoto = require("./photoplayers.json")
// const dataPlayers = require("./players.json")

// const mongoose = require("mongoose");
// // const Schema = mongoose.Schema;

// mongoose
//   .connect("mongodb://localhost:27017/reactAuthentication", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
//   })
//   .then(x => {
    
//     console.log(
//       `Connected to Mongo! Database name: "${x.connections[0].name}"`
//       );
//       // toPlayers();
//       // toDetails();
      
//       // toDo();
//       toPhoto();
//     })
//   .catch(err => {
//     console.error("Error connecting to mongo", err);
//   });

// function toDo() {
//   Player.find().then(allPlayers => {
//     allPlayers.map(player => {
//       // console.log(player._id)
//       Team.findOneAndUpdate(
//         { TeamID: player.TeamID },
//         { $push: { Players: player._id } },
//         { new: true }
//       ).then(() => {
//         console.log("modified");
//       });
//     });
//   });
// }

// function toPhoto() {
//   console.log("hola1");
//   PlayerDetails.find()
//     .then(allPlayers => {
//       allPlayers.forEach(player => {
//         Player.findOneAndUpdate(
//           { PlayerID: player.PlayerID },
//           { $set: { PhotoUrl: player.PhotoUrl } }
//         )
//           .then(act => {
//             console.log("actualizado");
//           })
//           .catch(err => console.log(err));
//       });
//     })
//     .catch(err => console.log(err, "findAll"));
// }

// function toPlayers(){
//   Player.insertMany(dataPlayers)
//   .then(data=>{console.log("done", data.length)})
//   .catch(err=>{console.log(err), "insert players"})

// }

// function toDetails(){
//   PlayerDetails.insertMany(dataPlayersPhoto)
//   .then(data=>{console.log("done", data.length)})
//   .catch(err=>{console.log(err), "insert playersPhoto"})



// }