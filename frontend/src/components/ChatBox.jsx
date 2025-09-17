import { useState } from "react";
import { sendChat } from "../api/chatApi.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const { token } = useAuth();

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "You", text: input };
    setMessages([...messages, newMessage]);

    try {
      const res = await sendChat({ query: input }, token);
      setMessages((prev) => [...prev, { sender: "AI", text: res.data.response }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "AI", text: "⚠️ Error" }]);
    }
    setInput("");
  };

  return (
    <div className="border rounded-lg p-4 w-full max-w-2xl mx-auto">
      <div className="h-64 overflow-y-auto mb-4 border p-2 bg-gray-50">
        {messages.map((m, idx) => (
          <div key={idx} className={m.sender === "You" ? "text-right" : "text-left"}>
            <span className="font-bold">{m.sender}: </span>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
