const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    PlayerID: String,
    PhotoUrl: String
  }
);

const PlayerDetails = mongoose.model("Detail", newsSchema);
module.exports = PlayerDetails;
