const Post = require("../../models/PostModel");

const createPost = async (req, res, next) => {
  try {
    console.log(req.body);
    const postContent = req.body;

    await Post.create(postContent);

    const responseBody = {};
    responseBody.result = "ok";

    res.status(201).json(responseBody);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  createPost,
};
