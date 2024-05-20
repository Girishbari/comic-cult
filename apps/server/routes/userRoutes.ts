import express from "express";
import authController from "../controllers/authController";

const router = express.Router();

router.post("/signup", authController.signup);
module.exports = router;
