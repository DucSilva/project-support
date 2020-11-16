import express from 'express';
import { createPost, getAllPost, getSinglePost, updatePost, deletePost } from '../controllers/post';
import { createUser, loginUser } from '../controllers/user';
import verifyToken from '../middleware/verifytoken';

const router = express.Router();
// Create post
router.post('/posts', verifyToken, createPost);
router.get('/posts', verifyToken, getAllPost);
router.get('/posts/:postId', verifyToken, getSinglePost);
router.put('/posts/:postId', verifyToken, updatePost);
router.delete('/posts/:postId', verifyToken, deletePost);

// Create User
router.post('/user/signup', createUser);
router.post('/users/login', loginUser);
// router.put('/users/:userId', updateUser);

export default router;