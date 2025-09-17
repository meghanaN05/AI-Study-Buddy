import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL + "/api/auth";

export const registerUser = (data) => axios.post(`${API}/register`, data);
export const loginUser = (data) => axios.post(`${API}/login`, data);
