import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { generateQuiz } from "../api/quizApi.js";
import { useAuth } from "../context/AuthContext.jsx";
import QuizCard from "../components/QuizCard.jsx";

export default function QuizPage() {
  const [topic, setTopic] = useState("");
  const [notes, setNotes] = useState("");
  const [quiz, setQuiz] = useState(null);
  const { token } = useAuth();

  const handleGenerate = async () => {
    const res = await generateQuiz({ topic, notes }, token);
    setQuiz(res.data);
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Generate Quiz</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Paste notes here"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Generate Quiz
        </button>

        {quiz && (
          <div className="mt-6">
            <h3 className="font-bold">Quiz for {quiz.topic}</h3>
            {quiz.questions.map((q, idx) => (
              <QuizCard key={idx} question={q} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
