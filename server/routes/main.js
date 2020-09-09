import express from 'express';
import { createPost, getAllPost, getSinglePost, updatePost, deletePost } from '../controllers/post';
import { createUser, loginUser, updateUser } from '../controllers/user';
import verifyToken from '../middleware/verifytoken';

const router = express.Router();
// Create post
router.post('/posts', verifyToken, createPost);
router.get('/posts', getAllPost);
router.get('/posts/:postId', getSinglePost);
router.patch('/posts/:postId', updatePost);
router.delete('/posts/:postId', deletePost);

// Create User
router.post('/user/signup', createUser);
router.post('/users/login', loginUser);
router.put('/users/:userId', updateUser);

export default router;