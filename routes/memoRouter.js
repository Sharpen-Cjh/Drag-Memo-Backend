const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memo.controller");

const { getMemo, createMemo } = memoController;

router.post(createMemo);

router.route("/:memoId").get(getMemo);

module.exports = router;
