const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memo.controller");

const { getMemo, createMemo, patchMemo, deleteMemo } = memoController;

router.post("/", createMemo);

router.route("/:memoId").get(getMemo).patch(patchMemo).delete(deleteMemo);

module.exports = router;
