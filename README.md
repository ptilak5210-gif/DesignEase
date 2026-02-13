# Kanva Editor - Custom Design Tool

A powerful web-based design editor application that allows users to create and manipulate graphics on a digital canvas. Built with a modern React frontend and a robust Flask backend.

## 🚀 Features

- **Interactive Canvas**: Drag-and-drop elements, resize, rotate, and customize designs.
- **User Authentication**: Secure Signup and Login functionality.
- **Project Concept**: Inspired by tools like Canva, offering a seamless editing experience.
- **Modern UI**: Clean and responsive interface built with Ant Design.

## 🛠 Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) (v19) with [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **UI Library**: [Ant Design](https://ant.design/)
- **Canvas Library**: [React Konva](https://konvajs.org/docs/react/index.html)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: React Icons, Ant Design Icons

### Backend
- **Framework**: [Flask](https://flask.palletsprojects.com/)
- **Database**: SQLite (via [SQLAlchemy](https://www.sqlalchemy.org/))
- **Authentication**: JWT (JSON Web Tokens) with [`flask-jwt-extended`](https://flask-jwt-extended.readthedocs.io/)
- **Security**: Bcrypt for password hashing
- **CORS**: Handling Cross-Origin Resource Sharing

## 📂 Project Structure

```
Kanva-main/
├── backend/                # Backend Server Code
│   ├── instance/           # Instance-specific data (e.g., SQLite DB)
│   ├── app.py              # Main application entry point & API routes
│   ├── models.py           # Database models (User, etc.)
│   └── requirements.txt    # Python dependencies
├── src/                    # Frontend Source Code
│   ├── assets/             # Static assets (images, etc.)
│   ├── components/         # Reusable React components
│   ├── pages/              # Application pages (Login, Dashboard, etc.)
│   ├── App.jsx             # Main App component
│   └── main.jsx            # Entry point
├── public/                 # Public static files
├── index.html              # HTML entry point
├── package.json            # Frontend dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## ⚙️ Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Python](https://www.python.org/) (v3.8+ recommended)

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/kanva-editor.git
cd Kanva-main/Kanva-main
```

### 2. Backend Setup
Navigate to the backend directory and set up the Python environment.

```bash
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv

# Activate the virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Frontend Setup
Navigate back to the root directory (or remain in `Kanva-main`) to install frontend packages.

```bash
# Return to root if in backend
cd .. 

# Install dependencies
npm install
```

## 🏃‍♂️ Running the Application

### Start the Backend Server
In the `backend` directory with your virtual environment activated:

```bash
python app.py
```
The server will start at `http://127.0.0.1:5000`.

### Start the Frontend Development Server
In the root directory:

```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or the port shown in your terminal).

## 🔌 API Endpoints

- **POST** `/api/auth/signup`: Create a new user account.
  - Body: `{ "username": "...", "email": "...", "password": "..." }`
- **POST** `/api/auth/login`: Authenticate a user and receive a JWT.
  - Body: `{ "email": "...", "password": "..." }`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
