import express from 'express';
import { protectRoute } from '../middleware/authMiddleware.js';
import { getRecommendedUsers,getOutgoingRequests, getMyFriends, sendFriendRequest, acceptFriendRequest, getFriendRequest } from '../controllers/userController.js';

const router = express.Router();

router.use(protectRoute);

router.get('/',  getRecommendedUsers);
router.get('/friends', getMyFriends);

router.post('/friend-request/:id', sendFriendRequest);
router.put('/friend-request/:id/accept', acceptFriendRequest);
router.put('/friend-requests', getFriendRequest);

router.get('/outgoing-requests', getOutgoingRequests);

export default router;