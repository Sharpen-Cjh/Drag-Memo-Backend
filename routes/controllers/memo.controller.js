const Memo = require("../../models/MemoModel");

const getMemo = async (req, res, next) => {
  try {
    const memoId = req.params.memoId;
    const memo = await Memo.findOne({ title: memoId }).exec();
    const responseBody = {};

    responseBody.memo = memo;
    responseBody.success = "true";

    res.status(200).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createMemo = async (req, res, next) => {
  try {
    const memo = req.body;
    const responseBody = {};

    console.log(memo);
    await Memo.create(memo);

    responseBody.success = "true";

    res.status(201).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createMemo,
  getMemo,
};
