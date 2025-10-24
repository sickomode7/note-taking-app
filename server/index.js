import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import noteRoutes from './routes/note.route.js'

const app = express()
dotenv.config()
const port = process.env.PORT || 8000
// Validate required environment variables
const MONGO_URL = process.env.MONGO_URL
if (!MONGO_URL) {
  console.error("FATAL: MONGO_URL is not set. Set it in your .env for production.")
  process.exit(1)
}

// Configure CORS
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173"
console.log("CORS_ORIGIN set to:", CORS_ORIGIN)
console.log("CORS_ORIGIN received:", process.env.CORS_ORIGIN)

// Allow requests with no origin (server-to-server, curl). Otherwise only allow the single configured origin.
const corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200,
}

// Database Connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB", error)
    process.exit(1)
  })

// Routing & Middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use("/api/v1/noteapp", noteRoutes)

// Health check endpoint
app.get("/health", (req, res) => res.status(200).json({ status: "ok" }))

// Basic error handler middleware (returns JSON)
app.use((err, req, res, next) => {
  if (err && err.message === "CORS_NOT_ALLOWED") {
    return res.status(403).json({ message: "CORS origin not allowed" })
  }
  res.status(500).json({ message: err?.message || "Internal Server Error" })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port} listening on ${CORS_ORIGIN}`)
})
