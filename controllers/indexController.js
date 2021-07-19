const User = require("../models/user");

exports.getIndex = async (req, res, next) => {
  try {
    let upperUser = "";
    let lowerUser = "";

    if (req.session.authorized) {
      upperUser = await User.findOne({
        "stats.place": req.session.user.stats.place - 1,
      });

      lowerUser = await User.findOne({
        "stats.place": req.session.user.stats.place + 1,
      });
    }

    return res.render("main/index", {
      pageTitle: "Akfub Flags",
      path: "/main",
      authorized: req.session.authorized,
      userData: req.session.authorized
        ? {
            login: req.session.user.login,
            role: req.session.user.role,
            games: req.session.user.stats.games,
            victories: req.session.user.stats.victories,
            place: req.session.user.stats.place,
            accuracy:
              req.session.user.stats.games != 0
                ? req.session.user.stats.answers / req.session.user.stats.games
                : 0,
            score: req.session.user.stats.score,
            upperUser: {
              login: upperUser ? upperUser.login : "...",
              place: upperUser ? upperUser.stats.place : "...",
              score: upperUser ? upperUser.stats.score : "...",
            },
            lowerUser: {
              login: lowerUser ? lowerUser.login : "...",
              place: lowerUser ? lowerUser.stats.place : "...",
              score: lowerUser ? lowerUser.stats.score : "...",
            },
          }
        : "",
    });
  } catch (err) {
    throw err;
  }
};
