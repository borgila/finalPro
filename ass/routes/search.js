const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Player = require("../models/Player");

router.get(`/searchAllTeams`, (req, res, next) => {
  Team.find({})
    .populate("Players")
    .then(allTeams => {
      res.json({ allTeams });
      console.log("entra");
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
module.exports = router;
