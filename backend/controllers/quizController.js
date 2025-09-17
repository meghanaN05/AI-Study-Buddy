import Quiz from "../models/Quiz.js";
import { askAI } from "../services/openaiService.js";

export const generateQuiz = async (req, res) => {
  try {
    const { topic, notes } = req.body;

    const prompt = `Generate 5 multiple-choice questions with 4 options each and mention the correct answer clearly, based on the following notes:\n\n${notes}`;

    const aiResponse = await askAI([{ role: "user", content: prompt }]);

    const quiz = new Quiz({ userId: req.user, topic, questions: [{ question: aiResponse }] });
    await quiz.save();

    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: "Error generating quiz", error: err.message });
  }
};
