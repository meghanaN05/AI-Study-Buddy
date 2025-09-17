import { askAI } from "../services/openaiService.js";
import History from "../models/History.js";

export const chatWithAI = async (req, res) => {
  try {
    const { query } = req.body;

    const response = await askAI([{ role: "user", content: query }]);

    await History.create({ userId: req.user, query, response });

    res.json({ response });
  } catch (err) {
    res.status(500).json({ message: "Error in chat", error: err.message });
  }
};
