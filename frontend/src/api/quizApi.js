import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL + "/api/quiz";

export const generateQuiz = (data, token) =>
  axios.post(API, data, { headers: { Authorization: `Bearer ${token}` } });
