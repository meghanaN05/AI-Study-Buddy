import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    topic: { type: String, required: true },
    questions: [
      {
        question: String,
        options: [String],
        answer: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
