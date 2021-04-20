const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../controllers/authController");
const User = require("../models/user");

const router = express.Router();

router.post("/logout", authController.postLogout);

router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);

router.get("/signup", authController.getSignUp);
router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Use correct email")
      .custom((value, { req }) => {
        return User.findOne({
          email: value,
        }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("There is already user with such an email");
          }
        });
      }),
    body("password", "Password must be atleast 5 letters").isLength({
      min: 5,
    }),
    body("confirmPassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords must be the same");
      }
      return true;
    }),
  ],
  authController.postSignUp
);

module.exports = router;
