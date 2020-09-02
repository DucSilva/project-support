import express from 'express';
import { createPost, getAllPost, getSinglePost, updatePost, deletePost } from '../controllers/post';
import { createUser, updateUser, loginUser } from '../controllers/user';

const router = express.Router();
// Create post
router.post('/posts', createPost);
router.get('/posts', getAllPost);
router.get('/posts/:postId', getSinglePost);
router.patch('/posts/:postId', updatePost);
router.delete('/posts/:postId', deletePost);

// Create User
router.post('/users', createUser);
router.put('/users/:userId', updateUser);
router.post('/users/login', loginUser)

export default router;