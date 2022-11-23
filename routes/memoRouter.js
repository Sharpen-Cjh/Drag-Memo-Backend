const express = require("express");
const router = express.Router();
const memoController = require("./controllers/memoController");
const {
  getMyMemos,
  getMemo,
  createMemo,
  patchMemo,
  deleteMemo,
  getMyMemosTitles,
} = memoController;

router.post("/:userId/memo", createMemo);
router.get("/:userId/memos/titles", getMyMemosTitles);
router
  .route("/:userId/memos/:memoId")
  .get(getMemo)
  .patch(patchMemo)
  .delete(deleteMemo);
router.route("/:userId/memos").get(getMyMemos);

module.exports = router;
