import { Router } from 'express';
import FriendController from '../controller/friend.controller';

const router = Router();
const friendController = new FriendController();

router.get('/friends', friendController.index);
router.get('/friends/', friendController.show);
router.post('/friends', friendController.create);
router.put('/friends/:id', friendController.update);
router.delete('/friends/:id', friendController.delete);

export default router;
