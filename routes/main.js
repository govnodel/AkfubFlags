const express = require("express");
// const { check, body } = require("express-validator");

const indexController = require("../controllers/indexController");

const router = express.Router();

router.get("/", indexController.getIndex);

module.exports = router;