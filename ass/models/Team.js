const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    Name: String,
    Active: Boolean,
    WikipediaLogoUrl: String,
    TeamID: Number,
    KeyCode: String,
    City: String,
    LeagueID: Number,
    StadiumID: Number,
    Conference: String,
    Division: String,
    PrimaryColor: String,
    SecondaryColor: String,
    TertiaryColor: String,
    QuaternaryColor: String,
    WikipediaWordMarkUrl: String,
    GlobalTeamID: Number,
    NbaDotComTeamID: Number,
    Players:[{type: Schema.Types.ObjectId,ref:"Player"}]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Teams = mongoose.model("Teams", newsSchema);
module.exports = Teams;
