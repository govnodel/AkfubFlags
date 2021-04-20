const { validationResult } = require("express-validator");

const User = require("../models/user");

exports.getFlagsModern = (req, res, next) => {
  return res.render("game/modern", {
    pageTitle: "Game Modern",
    path: "/game/flags/modern",
    errors: "",
  });
};
