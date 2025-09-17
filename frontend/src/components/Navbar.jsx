import { useAuth } from "../context/AuthContext.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <h1 className="text-xl font-bold">AI Study Buddy</h1>
      <div className="flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/quiz">Quiz</Link>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
