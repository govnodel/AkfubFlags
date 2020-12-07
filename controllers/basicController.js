exports.getBasic = async (req, res, next) => {
  try {
    return res.render("main/index", {
      pageTitle: "Akfub Flags",
      path: "/main",
    });
  } catch (err) {
    throw err;
  }
};
