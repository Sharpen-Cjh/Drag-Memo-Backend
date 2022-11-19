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

const patchMemo = async (req, res, next) => {
  try {
    const memoData = req.body;
    const memo = await Memo.findOne({ title: memoData.title });
    const responseBody = {};

    memo.description = memoData.description;

    await memo.save();

    responseBody.success = "true";

    res.status(200).json(responseBody);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

const deleteMemo = async (req, res, next) => {
  try {
    const { memoId } = req.params;
    const responseBody = {};

    await Memo.deleteOne({ title: memoId });

    responseBody.success = "true";

    res.status(200).json(responseBody);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = {
  createMemo,
  getMemo,
  patchMemo,
  deleteMemo,
};
