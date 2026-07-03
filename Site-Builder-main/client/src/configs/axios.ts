import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL || "https://site-builder-1-o1y7.onrender.com",
    withCredentials: true
})

export default api