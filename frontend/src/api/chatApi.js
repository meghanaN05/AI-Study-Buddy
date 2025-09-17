import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL + "/api/chat";

export const sendChat = (data, token) =>
  axios.post(API, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
