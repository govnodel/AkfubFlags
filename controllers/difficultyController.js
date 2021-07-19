const { validationResult } = require("express-validator");

exports.getIndex = (req, res, next) => {
  return res.render("difficulty", {
    pageTitle: "Choose difficulty",
    path: "/difficulty",
    errors: "",
  });
};
