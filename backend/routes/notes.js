import express from "express";
import { uploadNote, getNotes } from "../controllers/notesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, uploadNote);
router.get("/", protect, getNotes);

export default router;
