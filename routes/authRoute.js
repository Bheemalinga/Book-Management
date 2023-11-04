import express from "express";
import { registerController } from "../controllers/authController.js";

// Creating the router object
const router = express.Router();

// Routing
// Register || POST
router.post("/register", registerController);

export default router;
