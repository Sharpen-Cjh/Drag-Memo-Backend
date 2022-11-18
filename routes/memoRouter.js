const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memo.controller");

const { getMemo, createMemo, patchMemo } = memoController;

router.post(createMemo);

router.route("/:memoId").get(getMemo).patch(patchMemo);

module.exports = router;
