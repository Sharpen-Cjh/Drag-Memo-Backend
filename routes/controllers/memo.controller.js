const Memo = require("../../models/MemoModel");

const createMemo = async (req, res, next) => {
  try {
    console.log(req.body);
    const memo = req.body;

    await Memo.create(memo);

    const responseBody = {};
    responseBody.result = "ok";

    res.status(201).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createMemo,
};
