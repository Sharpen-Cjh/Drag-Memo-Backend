const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memoController");

const { getMemo, createMemo, patchMemo, deleteMemo } = memoController;

router.post("/memo", createMemo);

router.route("/memos/:memoId").get(getMemo).patch(patchMemo).delete(deleteMemo);

module.exports = router;
