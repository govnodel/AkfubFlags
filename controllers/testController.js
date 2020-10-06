exports.getIndex = async (req, res, next) => {
  return res.render("test/index", {
    pageTitle: "Test",
    path: "/",
  });
};
