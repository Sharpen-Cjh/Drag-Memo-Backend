const createError = require("http-errors");

const admin = require("../configs/firebase");
const ERROR = require("../constants/error");

const authenticate = async (req, res, next) => {
  try {
    console.log(req.headers);
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (token) {
      const user = await admin.auth().verifyIdToken(token);
      req.user = user;

      next();
    } else {
      next(createError(400, ERROR.INVALID_USER));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
