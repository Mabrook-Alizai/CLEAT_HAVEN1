import express from 'express';
import { listOrder, placeOrder,/*, verifyOrder*/ 
updateStatus} from '../controllers/orderController.js';
import authMiddleware from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
//orderRouter.post("/verify", verifyOrder)
orderRouter.get("/list", listOrder);
orderRouter.post("/status", updateStatus)

export default orderRouter;