const BlogPosts = require('../models/blogPostsModel')
const asyncHandler = require('express-async-handler')

// get all posts
const getPosts = asyncHandler(async(req, res) => {
    try {
        const posts = await BlogPosts .find({});
        res.status(200).json(posts);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// get a single post
const getPost = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const post = await BlogPosts.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a post
const createPost = asyncHandler(async(req, res) => {
    try {
        const post = await BlogPosts.create(req.body)
        res.status(200).json(post);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//delete a post
const deletePost = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const post= await BlogPosts.findByIdAndDelete(id);
        if(!post){
            res.status(404);
            throw new Error(`cannot find any post with ID ${id}`);
        }
        res.status(200).json(post);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
   getPosts,
   getPost,
   createPost,
   deletePost,
}