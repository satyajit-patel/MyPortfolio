const express = require("express");
const dataController = require("../controllers/dataController");

const router = express.Router();

router.post("/chat", dataController.llm);
router.post("/execute", dataController.judge0);

module.exports = router;