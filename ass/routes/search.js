const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Player = require("../models/Player");
const User = require("../models/User");

router.get(`/searchAllTeams`, (req, res, next) => {
  Team.find({})
    .populate("Players")
    .then(allTeams => {
      res.json({ allTeams });
    });
});
//en ambos cambie el populate de Player a Players porque se qujaba la consola de que no reconocia el esquema "Players"
router.get(`/selectOneTeam/:key`, (req, res, next) => {
  // console.log("hola");
  Team.findOne({ Key: req.params.key })
    .populate("Players")
    .then(foundTeam => {
      console.log(foundTeam);
      res.json({ foundTeam });
    });
});
router.get(`/selectOnePlayer/:id`, (req, res, next) => {
  // console.log(req.params.id);
  Player.findOne({ _id: req.params.id }).then(foundPlayer => {
    console.log(foundPlayer);
    res.json({ foundPlayer });
  });
});
router.post(`/addOnePlayer/:playerID/:userID`, (req, res) => {
  // console.log(req.params.userID)
  // console.log(req.params.playerID)
  console.log("----------------------------")
  console.log(req.user)
  
  User.findByIdAndUpdate(req.params.userID, {
    $push: { followedPlayers: req.params.playerID }
  }, {new:true}
  )
  .then(foundPlayer => {
    console.log(foundPlayer)
  })
  .catch(err=>console.log(err))
  
});

router.get(`/showMyTeam`,(req,res)=>{
  User
  .findById(req.user._id)
  .populate("followedPlayers")
  .then(myPlayers=>res.json({myPlayers}))
  .catch(err=>console.log(err))
})
module.exports = router;
