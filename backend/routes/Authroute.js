import express from "express";
import { registerController, loginController, testController } from "../Controller/authController.js";
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// routing object
const router = express.Router();

// routing
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

export default router;