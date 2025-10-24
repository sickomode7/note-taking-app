import axios from "axios"

// Read backend base URL from Vite environment variable
// Set VITE_API_URL in your `.env` (e.g. VITE_API_URL="http://localhost:4002/api/v1/noteapp/")
// Normalize baseURL: remove trailing slash if present so concatenation with request paths
let baseURL = import.meta.env.VITE_API_URL || "http://localhost:4002/api/v1/noteapp/"
baseURL = baseURL.replace(/\/+$/, "")

const BACKEND_URL = axios.create({
    baseURL,
})

export default BACKEND_URL