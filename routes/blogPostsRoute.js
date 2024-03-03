const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
} = require("../controllers/blogPostsController");

const router = express.Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.delete("/:id", deletePost);

module.exports = router;
