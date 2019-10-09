const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const Players = require("../models/Player");

router.get(`/searchAllTeams`, (req, res, next) => {
  Team.find({})
  .populate("Players")
  .then(allTeams => {
    console.log("tpm")
    console.log(allTeams[0])
    res.json({ allTeams });
  });

  // const {WikipediaLogoUrl,TeamId,Key,City,Name}=req.params;
});

router.get(`/selectOneTeam/:key`,(req,res,next)=>{
  console.log(req.params.key)
  Team.findOne({Key:req.params.key})
  .populate("Players")
  .then(foundTeam=>{
    console.log(foundTeam)
    res.json({foundTeam})
  })
})
module.exports = router;
