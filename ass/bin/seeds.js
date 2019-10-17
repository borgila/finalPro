const express = require("express");
const router = express.Router();
const Team = require("../models/Team");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect(
    "mongodb+srv://assmouth:mouthass@cluster0-1bvfb.mongodb.net/nbas?retryWrites=true&w=majority",
    {
      useNewUrlParser: true
    }
  )
  .then(x => {
    toDo();
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
const teams = [
  {
    TeamID: 1,
    KeyCode: "WAS",
    Active: true,
    City: "Washington",
    Name: "Wizards",
    LeagueID: 3,
    StadiumID: 1,
    Conference: "Eastern",
    Division: "Southeast",
    PrimaryColor: "E31837",
    SecondaryColor: "002B5C",
    TertiaryColor: "C4CED4",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000001,
    NbaDotComTeamID: 1610612764
  },
  {
    TeamID: 2,
    KeyCode: "CHA",
    Active: true,
    City: "Charlotte",
    Name: "Hornets",
    LeagueID: 3,
    StadiumID: 2,
    Conference: "Eastern",
    Division: "Southeast",
    PrimaryColor: "1D1160",
    SecondaryColor: "00788C",
    TertiaryColor: "A1A1A4",
    QuaternaryColor: "7AB2DD",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000002,
    NbaDotComTeamID: 1610612766
  },
  {
    TeamID: 3,
    KeyCode: "ATL",
    Active: true,
    City: "Atlanta",
    Name: "Hawks",
    LeagueID: 3,
    StadiumID: 3,
    Conference: "Eastern",
    Division: "Southeast",
    PrimaryColor: "E03A3E",
    SecondaryColor: "C1D32F",
    TertiaryColor: "26282A",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000003,
    NbaDotComTeamID: 1610612737
  },
  {
    TeamID: 4,
    KeyCode: "MIA",
    Active: true,
    City: "Miami",
    Name: "Heat",
    LeagueID: 3,
    StadiumID: 4,
    Conference: "Eastern",
    Division: "Southeast",
    PrimaryColor: "98002E",
    SecondaryColor: "F9A01B",
    TertiaryColor: "000000",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000004,
    NbaDotComTeamID: 1610612748
  },
  {
    TeamID: 5,
    KeyCode: "ORL",
    Active: true,
    City: "Orlando",
    Name: "Magic",
    LeagueID: 3,
    StadiumID: 5,
    Conference: "Eastern",
    Division: "Southeast",
    PrimaryColor: "0077C0",
    SecondaryColor: "000000",
    TertiaryColor: "C4CED4",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000005,
    NbaDotComTeamID: 1610612753
  },
  {
    TeamID: 6,
    KeyCode: "NY",
    Active: true,
    City: "New York",
    Name: "Knicks",
    LeagueID: 3,
    StadiumID: 6,
    Conference: "Eastern",
    Division: "Atlantic",
    PrimaryColor: "006BB6",
    SecondaryColor: "F58426",
    TertiaryColor: "BEC0C2",
    QuaternaryColor: "000000",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000006,
    NbaDotComTeamID: 1610612752
  },
  {
    TeamID: 7,
    KeyCode: "PHI",
    Active: true,
    City: "Philadelphia",
    Name: "76ers",
    LeagueID: 3,
    StadiumID: 7,
    Conference: "Eastern",
    Division: "Atlantic",
    PrimaryColor: "ED174C",
    SecondaryColor: "006BB6",
    TertiaryColor: "002B5C",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000007,
    NbaDotComTeamID: 1610612755
  },
  {
    TeamID: 8,
    KeyCode: "BKN",
    Active: true,
    City: "Brooklyn",
    Name: "Nets",
    LeagueID: 3,
    StadiumID: 8,
    Conference: "Eastern",
    Division: "Atlantic",
    PrimaryColor: "000000",
    SecondaryColor: "FFFFFF",
    TertiaryColor: null,
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000008,
    NbaDotComTeamID: 1610612751
  },
  {
    TeamID: 9,
    KeyCode: "BOS",
    Active: true,
    City: "Boston",
    Name: "Celtics",
    LeagueID: 3,
    StadiumID: 9,
    Conference: "Eastern",
    Division: "Atlantic",
    PrimaryColor: "008348",
    SecondaryColor: "BB9753",
    TertiaryColor: "000000",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000009,
    NbaDotComTeamID: 1610612738
  },
  {
    TeamID: 10,
    KeyCode: "TOR",
    Active: true,
    City: "Toronto",
    Name: "Raptors",
    LeagueID: 3,
    StadiumID: 10,
    Conference: "Eastern",
    Division: "Atlantic",
    PrimaryColor: "CE1141",
    SecondaryColor: "000000",
    TertiaryColor: "A1A1A4",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000010,
    NbaDotComTeamID: 1610612761
  },
  {
    TeamID: 11,
    KeyCode: "CHI",
    Active: true,
    City: "Chicago",
    Name: "Bulls",
    LeagueID: 3,
    StadiumID: 11,
    Conference: "Eastern",
    Division: "Central",
    PrimaryColor: "CE1141",
    SecondaryColor: "000000",
    TertiaryColor: null,
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000011,
    NbaDotComTeamID: 1610612741
  },
  {
    TeamID: 12,
    KeyCode: "CLE",
    Active: true,
    City: "Cleveland",
    Name: "Cavaliers",
    LeagueID: 3,
    StadiumID: 12,
    Conference: "Eastern",
    Division: "Central",
    PrimaryColor: "6F263D",
    SecondaryColor: "FDB81C",
    TertiaryColor: "041E42",
    QuaternaryColor: "000000",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Cleveland_Cavaliers_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000012,
    NbaDotComTeamID: 1610612739
  },
  {
    TeamID: 13,
    KeyCode: "IND",
    Active: true,
    City: "Indiana",
    Name: "Pacers",
    LeagueID: 3,
    StadiumID: 13,
    Conference: "Eastern",
    Division: "Central",
    PrimaryColor: "002D62",
    SecondaryColor: "FDBB30",
    TertiaryColor: "BEC0C2",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000013,
    NbaDotComTeamID: 1610612754
  },
  {
    TeamID: 14,
    KeyCode: "DET",
    Active: true,
    City: "Detroit",
    Name: "Pistons",
    LeagueID: 3,
    StadiumID: 14,
    Conference: "Eastern",
    Division: "Central",
    PrimaryColor: "006BB6",
    SecondaryColor: "ED174C",
    TertiaryColor: "BEC0C2",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7c/Pistons_logo17.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000014,
    NbaDotComTeamID: 1610612765
  },
  {
    TeamID: 15,
    KeyCode: "MIL",
    Active: true,
    City: "Milwaukee",
    Name: "Bucks",
    LeagueID: 3,
    StadiumID: 15,
    Conference: "Eastern",
    Division: "Central",
    PrimaryColor: "00471B",
    SecondaryColor: "EEE1C6",
    TertiaryColor: "0077C0",
    QuaternaryColor: "000000",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000015,
    NbaDotComTeamID: 1610612749
  },
  {
    TeamID: 16,
    KeyCode: "MIN",
    Active: true,
    City: "Minnesota",
    Name: "Timberwolves",
    LeagueID: 3,
    StadiumID: 16,
    Conference: "Western",
    Division: "Northwest",
    PrimaryColor: "0C2340",
    SecondaryColor: "78BE20",
    TertiaryColor: "236192",
    QuaternaryColor: "9EA2A2",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000016,
    NbaDotComTeamID: 1610612750
  },
  {
    TeamID: 17,
    KeyCode: "UTA",
    Active: true,
    City: "Utah",
    Name: "Jazz",
    LeagueID: 3,
    StadiumID: 17,
    Conference: "Western",
    Division: "Northwest",
    PrimaryColor: "002B5C",
    SecondaryColor: "F9A01B",
    TertiaryColor: "00471B",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000017,
    NbaDotComTeamID: 1610612762
  },
  {
    TeamID: 18,
    KeyCode: "OKC",
    Active: true,
    City: "Oklahoma City",
    Name: "Thunder",
    LeagueID: 3,
    StadiumID: 18,
    Conference: "Western",
    Division: "Northwest",
    PrimaryColor: "007AC1",
    SecondaryColor: "EF3B24",
    TertiaryColor: "FDBB30",
    QuaternaryColor: "002D62",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000018,
    NbaDotComTeamID: 1610612760
  },
  {
    TeamID: 19,
    KeyCode: "POR",
    Active: true,
    City: "Portland",
    Name: "Trail Blazers",
    LeagueID: 3,
    StadiumID: 19,
    Conference: "Western",
    Division: "Northwest",
    PrimaryColor: "E03A3E",
    SecondaryColor: "000000",
    TertiaryColor: "FFFFFF",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000019,
    NbaDotComTeamID: 1610612757
  },
  {
    TeamID: 20,
    KeyCode: "DEN",
    Active: true,
    City: "Denver",
    Name: "Nuggets",
    LeagueID: 3,
    StadiumID: 20,
    Conference: "Western",
    Division: "Northwest",
    PrimaryColor: "00285E",
    SecondaryColor: "5091CD",
    TertiaryColor: "FDB927",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000020,
    NbaDotComTeamID: 1610612743
  },
  {
    TeamID: 21,
    KeyCode: "MEM",
    Active: true,
    City: "Memphis",
    Name: "Grizzlies",
    LeagueID: 3,
    StadiumID: 21,
    Conference: "Western",
    Division: "Southwest",
    PrimaryColor: "00285E",
    SecondaryColor: "6189B9",
    TertiaryColor: "BED4E9",
    QuaternaryColor: "FDB927",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000021,
    NbaDotComTeamID: 1610612763
  },
  {
    TeamID: 22,
    KeyCode: "HOU",
    Active: true,
    City: "Houston",
    Name: "Rockets",
    LeagueID: 3,
    StadiumID: 22,
    Conference: "Western",
    Division: "Southwest",
    PrimaryColor: "CE1141",
    SecondaryColor: "C4CED4",
    TertiaryColor: "000000",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000022,
    NbaDotComTeamID: 1610612745
  },
  {
    TeamID: 23,
    KeyCode: "NO",
    Active: true,
    City: "New Orleans",
    Name: "Pelicans",
    LeagueID: 3,
    StadiumID: 23,
    Conference: "Western",
    Division: "Southwest",
    PrimaryColor: "002B5C",
    SecondaryColor: "B4975A",
    TertiaryColor: "E31837",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000023,
    NbaDotComTeamID: 1610612740
  },
  {
    TeamID: 24,
    KeyCode: "SA",
    Active: true,
    City: "San Antonio",
    Name: "Spurs",
    LeagueID: 3,
    StadiumID: 24,
    Conference: "Western",
    Division: "Southwest",
    PrimaryColor: "000000",
    SecondaryColor: "C4CED4",
    TertiaryColor: null,
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000024,
    NbaDotComTeamID: 1610612759
  },
  {
    TeamID: 25,
    KeyCode: "DAL",
    Active: true,
    City: "Dallas",
    Name: "Mavericks",
    LeagueID: 3,
    StadiumID: 25,
    Conference: "Western",
    Division: "Southwest",
    PrimaryColor: "0053BC",
    SecondaryColor: "BBC4CA",
    TertiaryColor: "000000",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000025,
    NbaDotComTeamID: 1610612742
  },
  {
    TeamID: 26,
    KeyCode: "GS",
    Active: true,
    City: "Golden State",
    Name: "Warriors",
    LeagueID: 3,
    StadiumID: 26,
    Conference: "Western",
    Division: "Pacific",
    PrimaryColor: "006BB6",
    SecondaryColor: "FDB927",
    TertiaryColor: "26282A",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000026,
    NbaDotComTeamID: 1610612744
  },
  {
    TeamID: 27,
    KeyCode: "LAL",
    Active: true,
    City: "Los Angeles",
    Name: "Lakers",
    LeagueID: 3,
    StadiumID: 27,
    Conference: "Western",
    Division: "Pacific",
    PrimaryColor: "552583",
    SecondaryColor: "FDB927",
    TertiaryColor: "000000",
    QuaternaryColor: null,
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000027,
    NbaDotComTeamID: 1610612747
  },
  {
    TeamID: 28,
    KeyCode: "LAC",
    Active: true,
    City: "Los Angeles",
    Name: "Clippers",
    LeagueID: 3,
    StadiumID: 27,
    Conference: "Western",
    Division: "Pacific",
    PrimaryColor: "ED174C",
    SecondaryColor: "006BB6",
    TertiaryColor: "87ceeb",
    QuaternaryColor: "000000",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/Los_Angeles_Clippers_%282015%29.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000028,
    NbaDotComTeamID: 1610612746
  },
  {
    TeamID: 29,
    KeyCode: "PHO",
    Active: true,
    City: "Phoenix",
    Name: "Suns",
    LeagueID: 3,
    StadiumID: 28,
    Conference: "Western",
    Division: "Pacific",
    PrimaryColor: "1D1160",
    SecondaryColor: "E56020",
    TertiaryColor: "000000",
    QuaternaryColor: "F9A01B",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000029,
    NbaDotComTeamID: 1610612756
  },
  {
    TeamID: 30,
    KeyCode: "SAC",
    Active: true,
    City: "Sacramento",
    Name: "Kings",
    LeagueID: 3,
    StadiumID: 29,
    Conference: "Western",
    Division: "Pacific",
    PrimaryColor: "5A2B81",
    SecondaryColor: "63727A",
    TertiaryColor: "000000",
    QuaternaryColor: "FFFFFF",
    WikipediaLogoUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
    WikipediaWordMarkUrl: null,
    GlobalTeamID: 20000030,
    NbaDotComTeamID: 1610612758
  }
];

const dataPlayersPhoto = require("./photoplayers.json");
const dataPlayers = require("./players.json");
const Player = require("../models/Player");
const PlayerDetails = require("../models/PlayerDet");

function toDo() {
  Player.deleteMany().then(() => {
    Team.deleteMany().then(() => {
      Team.insertMany(teams).then(() => {
        console.log("done adding teams");

        Player.insertMany(dataPlayers)
          .then(data => {
            console.log("done", data.length);
            Player.find().then(allPlayers => {
              let totalPlayers = allPlayers.length;
              let currentProcessedPlayer = 0;
              allPlayers.map(player => {
                // console.log(player._id)
                Team.findOneAndUpdate(
                  { TeamID: player.TeamID },
                  { $push: { Players: player._id } },
                  { new: true }
                ).then(() => {
                  currentProcessedPlayer++;

                  console.log(
                    "added players to teams: " +
                      player.Name +
                      " :::: " +
                      currentProcessedPlayer +
                      "/" +
                      totalPlayers
                  );

                  if (currentProcessedPlayer === totalPlayers) {
                    PlayerDetails.deleteMany().then(playerDetails => {
                      PlayerDetails.insertMany(dataPlayersPhoto)
                        .then(data => {
                          PlayerDetails.find()
                            .then(allPlayers => {
                              allPlayers.forEach(player => {
                                Player.findOneAndUpdate(
                                  { PlayerID: player.PlayerID },
                                  { $set: { PhotoUrl: player.PhotoUrl } }
                                )
                                  .then(act => {
                                    console.log("actualizadas photos");
                                    //process.exit(0);
                                  })
                                  .catch(err => console.log(err));
                              });
                            })
                            .catch(err => console.log(err, "findAll"));
                        })
                        .catch(err => {
                          console.log(err), "insert playersPhoto";
                        });
                    });
                  }
                });
              });
            });
          })
          .catch(err => {
            console.log(err), "insert players";
          });
      });
    });
  });
}
