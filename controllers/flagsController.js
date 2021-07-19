const { validationResult } = require("express-validator");
const flag = require("../models/flag");

const Flag = require("../models/flag");

exports.getIndex = async (req, res, next) => {
  const flags = await Flag.find();

  return res.render("flags/index", {
    pageTitle: "Flags",
    path: "/flags",
    errors: "",
    flags: flags,
  });
};

exports.getAddFlag = (req, res, next) => {
  return res.render("flags/add", {
    pageTitle: "Add new flag",
    path: "/flags/add",
    errors: "",
    oldInput: {
      name: "",
      continent: "",
      century: "",
      difficulty: "",
      population: "",
      capital: "",
      area: "",
      currency: "",
      path: "",
      modern: true,
      date: "",
    },
  });
};


exports.postAddFlag = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("flags/add", {
      pageTitle: "Add new flag",
      path: "/flags/add",
      errors: errors.array()[0].msg,
      oldInput: {
        name: req.body.name,
        continent: req.body.continent,
        century: req.body.century,
        difficulty: req.body.difficulty,
        population: req.body.population,
        capital: req.body.capital,
        area: req.body.area,
        currency: req.body.currency,
        path: req.body.path,
        modern: req.body.modern,
        date: req.body.date,
      },
    });
  }

  try {
    const flag = new Flag({
      name: req.body.name,
      continent: req.body.continent,
      century: req.body.century,
      difficulty: req.body.difficulty,
      population: req.body.population,
      capital: req.body.capital,
      area: req.body.area,
      currency: req.body.currency,
      path: req.body.path ? req.body.path : req.body.name,
      modern: req.body.modern ? true : false,
      date: req.body.modern ? null : req.body.date,
      rating: 0,
    });
    await flag.save();

    const flags = await Flag.find();

    return res.render("flags/index", {
      pageTitle: "Flags",
      path: "/flags",
      errors: "",
      flags: flags,
    });
  } catch (err) {
    throw err;
  }
};

exports.getEditFlag = async (req, res, next) => {
  const flag = await Flag.findById(req.params.flagId);

  return res.render("flags/edit", {
    pageTitle: "Edit flag",
    path: "/flags/edit",
    flag: flag,
    errors: "",
    oldInput: {
      name: "",
      continent: "",
      century: "",
      difficulty: "",
      population: "",
      capital: "",
      area: "",
      currency: "",
      path: "",
      modern: "",
      date: "",
    },
  });
};

exports.postEdit = async (req, res, next) => {
  const errors = validationResult(req);
  const flagId = req.body.flagId;

  if (!errors.isEmpty()) {
    try {
      const flag = await Flag.findById(flagId);

      return res.status(422).render("flags/edit", {
        pageTitle: "Edit flag",
        path: "/flags/edit",
        flag: flag,
        errors: errors.array()[0].msg,
        oldInput: {
          name: req.body.name,
          continent: req.body.continent,
          century: req.body.century,
          difficulty: req.body.difficulty,
          population: req.body.population,
          capital: req.body.capital,
          area: req.body.area,
          currency: req.body.currency,
          path: req.body.path,
          modern: req.body.modern,
          date: req.body.date,
        },
      });
    } catch (err) {
      throw err;
    }
  }

  try {
    const flag = await Flag.findById(flagId);

    flag.name = req.body.name;
    fla
    
    await flag.save();

    return res.redirect("/flags");
  } catch (err) {
    throw err;
  }
};

exports.postDeleteFlag = async (req, res, next) => {
  try {
    await Flag.deleteOne({ _id: req.body.flagId });

    const flags = await Flag.find();

    return res.render("flags/index", {
      pageTitle: "Flags",
      path: "/flags",
      errors: "",
      flags: flags,
    });
  } catch (err) {
    throw err;
  }
};