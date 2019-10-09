const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    StatID: Number,
    TeamID: Number,
    PlayerID: Number,
    Name: String,
    Team: String,
    Position: String,
    Games: Number,
    Started: Number,
    Season: Number,
    Points: Number,
    Rebounds: Number,
    OffensiveRebounds: Number,
    DefensiveRebounds: Number,
    Assists: Number,
    BlockedShots: Number,
    Steals: Number,
    Turnovers: Number,
    FieldGoalsMade: Number,
    FieldGoalsAttempted: Number,
    FieldGoalsPercentage: Number,
    FreeThrowsMade: Number,
    FreeThrowsAttempted: Number,
    FreeThrowsPercentage: Number,
    TwoPointersMade: Number,
    TwoPointersAttempted: Number,
    TwoPointersPercentage: Number,
    ThreePointersMade: Number,
    ThreePointersAttempted: Number,
    ThreePointersPercentage: Number,
    Minutes: Number,
    PersonalFouls: Number,
    PlusMinus: Number,
    DoubleDoubles: Number,
    TripleDoubles: Number,
    FantasyPoints: Number,
    FantasyPointsFanDuel: Number,
    FantasyPointsDraftKings: Number,
    FantasyPointsYahoo: Number,
    FantasyPointsFantasyDraft: Number,
    Day: Number,
    Date: Number,
    HomeOrAway: String,
    Opponent: String,
    Started_YN: Number,
    PlayerUrlString: String,
    TeamUrlString: String,
    GameStatus: String,
    GameStatusClass: String,
    Game: String,
    TeamIsHome: Boolean,
    Result: Number,
    StatSummary: Array,
    IsScrambled: Boolean,
    Rank: Number,
    StaticRank: Number,
    FantasyPosition: Number,
    PositionRank: Number,
    IsFavorite: Boolean
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Players = mongoose.model("Player", newsSchema);
module.exports = Players;
