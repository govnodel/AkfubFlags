const express = require("express");
// const { check, body } = require("express-validator");

const basicController = require("../controllers/basicController");

const router = express.Router();

router.get("/", basicController.getBasic);

module.exports = router;