const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
      type: String,
      enum: ['Admin', 'User'],
      required: false,
  },
  stats: {
    victories: Number,
    games: Number,
    score: Number,
    answers: Number,
    place: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
