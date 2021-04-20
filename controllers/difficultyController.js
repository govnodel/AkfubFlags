const { validationResult } = require("express-validator");

const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  return res.render("difficulty", {
    pageTitle: "Choose difficulty",
    path: "/difficulty",
    errors: "",
  });
};
