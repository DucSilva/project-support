import mongoose from 'mongoose';
import Post from '../models/post';

// create new Post
export function createPost(req, res) {
    const post = new Post({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
    });

    return post
        .save()
        .then((newPost) => {
            return res.status(201).json({
                success: true,
                message: 'New cause created successfully',
                Post: newPost,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            })
        })
}

// Get all causes 
export function getAllPost(req, res) {
    Post.find()
        .select('_id title description')
        .then((allPost) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all Posts',
                Post: allPost,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        })
}

// get single Post
export function getSinglePost(req, res) {
    const id = req.params.postId;
    Post.findById(id)
        .then((singlePost) => {
            res.status(200).json({
                success: true,
                message: `More on ${singlePost.title}`,
                Post: singlePost,
            })
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'This Post does not exist',
                error: err.message,
            })
        });
}

// update Post
export function updatePost(req, res) {
    const id = req.params.postId;
    const updateObject = req.body;
    updateObject._id = id;
    console.log('updateObject==>>', updateObject)
    Post.update({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'Post is updated',
                updatePost: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.'
            });
        });
}

// delete a Post 
export function deletePost(req, res) {
    const id = req.params.postId;
    Post.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(200).json({
            success: true,
            message: 'Post is deleted',
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: 'This Post does not exist',
            error: err.message,
        }));
}