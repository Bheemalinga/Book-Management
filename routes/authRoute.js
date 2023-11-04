import express from "express";

// Creating the router object
const router = express.Router();

// Routing
// Register || POST
router.post("/register", registerController);

export default router;
