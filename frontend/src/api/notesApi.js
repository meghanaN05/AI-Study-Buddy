import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL + "/api/notes";

export const uploadNote = (data, token) =>
  axios.post(API, data, { headers: { Authorization: `Bearer ${token}` } });

export const getNotes = (token) =>
  axios.get(API, { headers: { Authorization: `Bearer ${token}` } });
