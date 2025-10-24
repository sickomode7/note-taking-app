# 📝 NoteApp - MERN Stack Application

A modern, full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a beautiful dark mode design and real-time updates.

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-22.21-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

## ✨ Features

- 📝 **Create, read, update, and delete notes**
- 🎨 **Modern UI** with Tailwind CSS
- 🌙 **Dark mode** design
- 🔄 **Real-time updates**
- 📱 **Mobile-friendly** responsive design
- ⚡ **Fast performance** with Vite
- 🔒 **Secure API** with CORS protection

## 🛠 Tech Stack

### Frontend
- **React.js** with Vite
- **Tailwind CSS** for styling
- **Axios** for API calls
- **Context API** for state management
- **Lucide React** for icons

### Backend
- **Node.js & Express.js**
- **MongoDB** with Mongoose ODM
- **CORS** for cross-origin requests
- **dotenv** for environment variables

## 📁 Project Structure

```
MERN-PROJECT-1/
├── frontend/
│   ├── src/
│   │   ├── api/          # API configuration
│   │   ├── assets/       # Static assets
│   │   ├── components/   # React components
│   │   ├── context/      # Context API files
│   │   └── pages/        # Page components
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── controllers/      # Business logic
    ├── models/          # MongoDB models
    ├── routes/          # API routes
    ├── .env            # Environment variables
    └── index.js        # Server entry point
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB Atlas** account
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd MERN-PROJECT-1
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URL=your_mongodb_connection_string
   PORT=4001
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

## 🎯 Running the Application

### Start Backend Server
```bash
cd backend
npm start
```
Server runs on: `http://localhost:4001`

### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Application runs on: `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/noteapp/get-notes` | Get all notes |
| POST | `/api/v1/noteapp/create-note` | Create a new note |
| PUT | `/api/v1/noteapp/update-note/:id` | Update a specific note |
| DELETE | `/api/v1/noteapp/delete-note/:id` | Delete a specific note |

### Example API Usage

**Create a Note:**
```javascript
POST /api/v1/noteapp/create-note
Content-Type: application/json

{
  "title": "My Note",
  "content": "This is my note content"
}
```

**Get All Notes:**
```javascript
GET /api/v1/noteapp/get-notes
```

## 🎨 UI Components

The application includes:
- **Navbar** with navigation and theme toggle
- **Note Cards** for displaying notes
- **Create/Edit Forms** for note management
- **Responsive Layout** that works on all devices

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Using nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm run dev  # Vite development server with hot reload
```

### Building for Production
```bash
cd frontend
npm run build
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create a feature branch**: `git checkout -b feature/AmazingFeature`
3. **Commit your changes**: `git commit -m 'Add AmazingFeature'`
4. **Push to the branch**: `git push origin feature/AmazingFeature`
5. **Open a Pull Request**

## 📝 License

This project is licensed under the **ISC License**.

## 🆘 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your connection string in `.env`
   - Check if your IP is whitelisted in MongoDB Atlas

2. **CORS Errors**
   - Ensure backend CORS is properly configured
   - Verify frontend is making requests to the correct port

3. **Dependency Issues**
   - Delete `node_modules` and run `npm install` again
   - Ensure you're using compatible package versions

### Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB Atlas cluster is running

---

**Happy Note-Taking!** 📓✨

