export default function QuizCard({ question }) {
  return (
    <div className="border rounded-lg p-4 mb-2 bg-gray-100">
      <p className="font-bold">{question.question}</p>
      <ul className="list-disc ml-6">
        {question.options?.map((opt, idx) => (
          <li key={idx}>{opt}</li>
        ))}
      </ul>
      <p className="mt-2 text-green-600">Answer: {question.answer}</p>
    </div>
  );
}
