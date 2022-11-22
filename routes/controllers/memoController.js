const Memo = require("../../models/MemoModel");
const User = require("../../models/UserModel");

const getMemo = async (req, res, next) => {
  try {
    const { memoId, userId } = req.params;
    const user = await User.findOne({ googleId: userId });
    const memo = await Memo.findOne({
      title: memoId,
      author: user._id,
    });
    const responseBody = {};

    if (memo === null) {
      const memo = await Memo.findById(memoId).exec();

      responseBody.memo = memo;
      responseBody.success = "true";

      res.status(200).json(responseBody);

      return;
    }

    responseBody.memo = memo;
    responseBody.success = "true";

    res.status(200).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getMyMemos = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ googleId: userId }).populate("memos");

    res.status(200).json(user);
  } catch (error) {}
};

const createMemo = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({ googleId: userId });
    const memoData = { ...req.body, author: user._id };
    const memo = await Memo.create(memoData);
    const responseBody = {};

    user.memos.push(memo._id);
    user.save();

    responseBody.data = memo;
    responseBody.success = "true";

    res.status(201).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const patchMemo = async (req, res, next) => {
  try {
    const { memoId, userId } = req.params;
    const memoData = req.body;
    const responseBody = {};

    const user = await User.findOne({ googleId: userId });
    const memo = await Memo.findOneAndUpdate(
      {
        title: memoId,
        author: user._id,
      },
      memoData
    );
    if (memo === null) {
      const result = await Memo.findByIdAndUpdate(memoId, memoData);

      responseBody.success = "true";
      res.status(200).json(responseBody);

      return;
    }
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
    const { memoId, userId } = req.params;
    const user = await User.findOne({ googleId: userId });
    const { deletedCount } = await Memo.deleteOne({
      title: memoId,
      author: user._id,
    });
    const responseBody = {};

    if (deletedCount === 0) {
      await Memo.findByIdAndDelete(memoId);
      responseBody.success = "true";

      res.status(200).json(responseBody);
    }

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
  getMyMemos,
  patchMemo,
  deleteMemo,
};
