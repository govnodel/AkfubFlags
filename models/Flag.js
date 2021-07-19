const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const flagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  modern: {
    type: Boolean,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  century: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  area: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Flag", flagSchema);
