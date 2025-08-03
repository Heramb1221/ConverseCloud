import express from 'express';
import { signup, login, logout, onboard } from '../controllers/authController.js';
import { protectRoute } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

router.post('/onboarding',protectRoute, onboard);

router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({
        user: {
            _id: req.user._id,
            email: req.user.email,
            fullName: req.user.fullName,
            profilePic: req.user.profilePic
        }
    });
});

export default router;