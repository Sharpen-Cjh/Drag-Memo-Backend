const createError = require("http-errors");

const User = require("../../models/UserModel");
const ERROR = require("../../constants/error");

const postLogin = async (req, res, next) => {
  try {
    const { username, googleId } = req.body;
    console.log(username, googleId);

    if (!username || !googleId) {
      return next(createError(400, ERROR.INVALID_USER));
    }

    const user = await User.findOne({ googleId });

    if (!user) {
      await User.create({ username, googleId });
    }
    res.status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postLogin,
};
