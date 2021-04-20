const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/");
  });
};

exports.getLogin = (req, res, next) => {
  return res.render("auth/login", {
    pageTitle: "Log in",
    path: "/login",
    errors: "",
    oldInput: {
      login: "",
      password: "",
    },
  });
};

exports.postLogin = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("auth/login", {
      pageTitle: "Log in",
      path: "/login",
      errors: errors.array()[0].msg,
      oldInput: {
        login: req.body.login,
        password: req.body.password,
      },
    });
  }

  const login = req.body.login;
  const password = req.body.password;

  try {
    // await User.deleteOne({
    //   login: login,
    // });
    const user = await User.findOne({
      login: login,
    });

    if (!user) {
      // req.flash("error", "Invalid login");
      return res.status(422).redirect("/login");
    }

    const doMatch = await bcrypt.compare(password, user.password);

    if (doMatch) {
      req.session.authorized = true;
      req.session.user = user;
      await req.session.save();

      return res.render("auth/welcome", {
        pageTitle: "Welcome",
        path: "/login",
        login: login,
        firstTime: false,
      });
    }
    // req.flash("error", "Wrong password");
    return res.redirect("/login");
  } catch (err) {
    throw err;
  }
};

exports.getSignUp = (req, res, next) => {
  return res.render("auth/signUp", {
    pageTitle: "Sign Up",
    path: "/signUp",
    errors: "",
    oldInput: {
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
    },
  });
};

exports.postSignUp = async (req, res, next) => {
  const email = req.body.email;
  const login = req.body.login;
  const password = req.body.password;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("auth/signUp", {
      pageTitle: "Sign Up",
      path: "/signUp",
      errors: errors.array()[0].msg,
      oldInput: {
        email: req.body.email,
        login: req.body.login,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const userCount = await User.countDocuments();
    const userRole = userCount === 0 ? "Admin" : "User";

    const user = new User({
      email: email,
      login: login,
      password: hashedPassword,
      role: userRole,
      stats: {
        victories: 0,
        games: 0,
        score: 0,
        answers: 0,
        place: +(userCount + 1),
      },
    });
    await user.save();

    req.session.authorized = true;
    req.session.user = user;
    await req.session.save();

    return res.render("auth/welcome", {
      pageTitle: "Welcome",
      path: "/login",
      login: login,
      firstTime: true,
    });
  } catch (err) {
    throw err;
  }
};
