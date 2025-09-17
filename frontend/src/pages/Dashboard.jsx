import Navbar from "../components/Navbar.jsx";
import ChatBox from "../components/ChatBox.jsx";
import NoteUploader from "../components/NoteUploader.jsx";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6 space-y-6">
        <ChatBox />
        <NoteUploader />
      </div>
    </div>
  );
}
