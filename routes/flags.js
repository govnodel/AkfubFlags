const express = require("express");

const { check, body } = require("express-validator");

const flagsController = require("../controllers/flagsController");

const router = express.Router();

router.get("/flags", flagsController.getIndex);

router.get("/flags/add", flagsController.getAddFlag);
router.post(
  "/flags/add",
  [
    body("name").notEmpty(),
    body("continent").notEmpty(),
    body("century").notEmpty(),
    body("difficulty").notEmpty(),
    body("population").notEmpty(),
    body("capital").notEmpty(),
    body("area").notEmpty(),
    body("currency").notEmpty(),
  ],
  flagsController.postAddFlag
);

router.get("/flags/edit/:flagId", flagsController.getEditFlag);

router.post("/flags/delete", flagsController.postDeleteFlag);

module.exports = router;
