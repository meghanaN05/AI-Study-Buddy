import express from "express";
import { generateQuiz } from "../controllers/quizController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, generateQuiz);

export default router;
