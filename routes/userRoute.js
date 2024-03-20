import express from 'express'
import { getUserProfile, logout} from '../controllers/userController.js';
import { googleSignup } from '../controllers/googleSignupController.js';

const router = express.Router();

router.get('/profile',getUserProfile)
router.post('/google/signup',googleSignup)
router.post('/logout',logout)


export default router