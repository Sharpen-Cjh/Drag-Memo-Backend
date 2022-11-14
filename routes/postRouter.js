const express = require("express");
const router = express.Router();
const postController = require("../routes/controllers/post.controller");

const { createPost } = postController;

router.post("/upload", createPost);

module.exports = router;
