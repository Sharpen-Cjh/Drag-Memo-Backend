const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memo.controller");

const { createMemo } = memoController;

router.post("/", createMemo);

module.exports = router;
