import { useState, useEffect } from "react";
import { uploadNote, getNotes } from "../api/notesApi.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function NoteUploader() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);
  const { token } = useAuth();

  const fetchNotes = async () => {
    const res = await getNotes(token);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleUpload = async () => {
    await uploadNote({ title, content }, token);
    setTitle("");
    setContent("");
    fetchNotes();
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-lg font-bold mb-2">Upload Notes</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">
        Save Note
      </button>

      <h3 className="mt-4 font-bold">Your Notes</h3>
      <ul className="list-disc ml-5">
        {notes.map((note) => (
          <li key={note._id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
