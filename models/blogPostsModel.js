const mongoose = require("mongoose");

const blogPostsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
     content: {
      type: String,
      required: true,
    },
     author: {
      type: String,
      required: true,
    },
    datePublished: { type: Date, default: Date.now }
  },
  {
    timestamps: true,
  }
);

const blogPosts = mongoose.model("Blog", blogPostsSchema);

module.exports = blogPosts;
