const express = require("express");

const difficultyController = require("../controllers/difficultyController");

const router = express.Router();

router.get("/difficulty", difficultyController.getIndex);

module.exports = router;
