const express = require("express");

const gameController = require("../controllers/gameController");

const router = express.Router();

router.get("/game/flags/:regime", gameController.getFlagsModern);

module.exports = router;
