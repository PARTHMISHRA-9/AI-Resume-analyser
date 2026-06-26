# AI Resume Analyzer

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-3.9+-blue.svg)
![Node.js](https://img.shields.io/badge/node.js-16+-green.svg)
![React](https://img.shields.io/badge/react-18+-61dafb.svg)
![Flask](https://img.shields.io/badge/flask-2.0+-black.svg)

## Overview

AI Resume Analyzer is a comprehensive web application that leverages AI and machine learning to analyze resumes against job descriptions. It provides intelligent insights on resume optimization, ATS score calculation, missing keywords detection, and AI-powered recommendations for resume improvement.

## Features

✨ **Core Features**
- 📄 PDF Resume Upload & Parsing
- 🎯 ATS Score Calculation
- 🔍 Keyword Matching Analysis
- 🤖 AI-Powered Resume Improvement Suggestions
- 💼 Job Description Comparison
- 📊 Detailed Analytics & Reports
- 🔐 Secure JWT Authentication
- 📱 Fully Responsive Design
- 🌙 Dark Mode Support
- 💾 Resume History & Analytics

✨ **AI Features**
- Resume enhancement recommendations
- Missing skills identification
- Project suggestions based on job description
- Interview preparation guide
- Career advice and guidance

## Tech Stack

### Frontend
- **React 18** - UI Framework
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Chart.js & React-Chartjs-2** - Data visualization
- **React Hot Toast** - Notifications
- **Framer Motion** - Animations

### Backend
- **Flask 2.0+** - Web framework
- **MongoDB Atlas** - Database
- **PyJWT** - JWT Authentication
- **PyMuPDF** - PDF text extraction
- **Google Gemini API** - AI-powered analysis
- **Python-dotenv** - Environment management
- **Flask-CORS** - CORS handling
- **Gunicorn** - WSGI server

## Project Structure

```
AI-Resume-analyser/
├── frontend/                          # React Application
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/               # Reusable Components
│   │   │   ├── common/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── LoadingSpinner.jsx
│   │   │   │   └── ErrorBoundary.jsx
│   │   │   ├── forms/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   ├── ResumeUploadForm.jsx
│   │   │   │   └── JobDescriptionForm.jsx
│   │   │   ├── cards/
│   │   │   │   ├── AnalysisCard.jsx
│   │   │   │   ├── ScoreCard.jsx
│   │   │   │   ├── KeywordCard.jsx
│   │   │   │   └── ResumeCard.jsx
│   │   │   ├── charts/
│   │   │   │   ├── ATSChart.jsx
│   │   │   │   ├── SkillsChart.jsx
│   │   │   │   └── ComparisonChart.jsx
│   │   │   └── modals/
│   │   │       ├── ConfirmModal.jsx
│   │   │       └── DetailModal.jsx
│   │   ├── pages/                    # Page Components
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   ├── Resume/
│   │   │   │   ├── UploadResume.jsx
│   │   │   │   ├── ResumeHistory.jsx
│   │   │   │   └── ResumeDetail.jsx
│   │   │   ├── Analysis/
│   │   │   │   ├── AnalyzeResume.jsx
│   │   │   │   ├── AnalysisResult.jsx
│   │   │   │   └── Recommendations.jsx
│   │   │   ├── Profile/
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── EditProfile.jsx
│   │   │   │   └── Settings.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/                  # Context API
│   │   │   ├── AuthContext.jsx
│   │   │   ├── ThemeContext.jsx
│   │   │   └── AnalysisContext.jsx
│   │   ├── hooks/                    # Custom Hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useApi.js
│   │   │   ├── useTheme.js
│   │   │   └── useFetch.js
│   │   ├── services/                 # API Services
│   │   │   ├── api.js
│   │   │   ├── authService.js
│   │   │   ├── resumeService.js
│   │   │   ├── analysisService.js
│   │   │   └── userService.js
│   │   ├── utils/                    # Utility Functions
│   │   │   ├── constants.js
│   │   │   ├── validators.js
│   │   │   ├── helpers.js
│   │   │   └── formatters.js
│   │   ├── styles/                   # Global Styles
│   │   │   ├── index.css
│   │   │   ├── tailwind.css
│   │   │   └── animations.css
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── reportWebVitals.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   └── .env
│
├── backend/                           # Flask Application
│   ├── app/
│   │   ├── __init__.py
│   │   ├── config.py                 # Configuration
│   │   ├── models/                   # Data Models
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── resume.py
│   │   │   └── analysis.py
│   │   ├── routes/                   # API Routes
│   │   │   ├── __init__.py
│   │   │   ├── auth.py               # Auth endpoints
│   │   │   ├── resume.py             # Resume endpoints
│   │   │   ├── analysis.py           # Analysis endpoints
│   │   │   └── user.py               # User endpoints
│   │   ├── services/                 # Business Logic
│   │   │   ├── __init__.py
│   │   │   ├── auth_service.py
│   │   │   ├── resume_service.py
│   │   │   ├── analysis_service.py
│   │   │   ├── ats_engine.py         # ATS Score Calculator
│   │   │   ├── gemini_service.py     # Gemini Integration
│   │   │   └── pdf_parser.py         # PDF Processing
│   │   ├── middleware/               # Custom Middleware
│   │   │   ├── __init__.py
│   │   │   ├── auth_middleware.py
│   │   │   └── error_handler.py
│   │   ├── utils/                    # Utility Functions
│   │   │   ├── __init__.py
│   │   │   ├── decorators.py
│   │   │   ├── validators.py
│   │   │   └── constants.py
│   │   └── database/                 # Database Connection
│   │       ├── __init__.py
│   │       └── mongodb.py
│   ├── tests/                        # Unit Tests
│   │   ├── __init__.py
│   │   ├── test_auth.py
│   │   ├── test_resume.py
│   │   └── test_analysis.py
│   ├── venv/                         # Virtual Environment
│   ├── requirements.txt              # Dependencies
│   ├── wsgi.py                       # WSGI entry point
│   ├── run.py                        # Development server
│   ├── .env                          # Environment variables
│   └── .env.example
│
├── docker-compose.yml                # Docker Composition
├── Dockerfile.backend               # Backend Docker Image
├── Dockerfile.frontend              # Frontend Docker Image
├── .gitignore
└── .env.example
```

## Installation

### Prerequisites
- Python 3.9+
- Node.js 16+
- MongoDB Atlas account
- Google Gemini API key
- Git

### Backend Setup

1. **Clone and navigate to backend**
   ```bash
   git clone https://github.com/PARTHMISHRA-9/AI-Resume-analyser.git
   cd AI-Resume-analyser/backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your credentials
   ```

5. **Run backend**
   ```bash
   python run.py
   ```
   Backend runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API URL
   ```

4. **Run development server**
   ```bash
   npm start
   ```
   Frontend runs on `http://localhost:3000`

## Environment Variables

### Backend (.env)
```env
FLASK_ENV=production
FLASK_DEBUG=False
FLASK_SECRET_KEY=your-secret-key
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ai_resume_analyzer
JWT_SECRET_KEY=your-jwt-secret
GEMINI_API_KEY=your-gemini-api-key
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
SERVER_PORT=5000
SERVER_HOST=0.0.0.0
```

### Frontend (.env)
```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_API_TIMEOUT=30000
```

## API Documentation

### Authentication

#### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "token": "jwt_token",
  "user": { ... }
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token",
  "user": { ... }
}
```

### Resume

#### Upload Resume
```
POST /api/resume/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

Form Data:
- file: (PDF file)
- jobDescription: (optional) job description text

Response:
{
  "success": true,
  "message": "Resume uploaded successfully",
  "resume": {
    "_id": "...",
    "fileName": "resume.pdf",
    "uploadedAt": "...",
    "textContent": "..."
  }
}
```

#### Get Resume History
```
GET /api/resume/history
Authorization: Bearer <token>

Response:
{
  "success": true,
  "resumes": [ ... ]
}
```

### Analysis

#### Analyze Resume
```
POST /api/analysis/analyze
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeId": "...",
  "jobDescription": "Job description text"
}

Response:
{
  "success": true,
  "analysis": {
    "atsScore": 85,
    "matchScore": 78,
    "keywords": { ... },
    "missingKeywords": [ ... ],
    "recommendations": [ ... ]
  }
}
```

#### Get AI Recommendations
```
POST /api/analysis/recommendations
Authorization: Bearer <token>
Content-Type: application/json

{
  "resumeText": "...",
  "jobDescription": "..."
}

Response:
{
  "success": true,
  "recommendations": {
    "improvements": [ ... ],
    "missingSkills": [ ... ],
    "projectSuggestions": [ ... ],
    "interviewTips": [ ... ],
    "careerAdvice": [ ... ]
  }
}
```

## Deployment

### Docker Deployment

1. **Build images**
   ```bash
   docker-compose build
   ```

2. **Run containers**
   ```bash
   docker-compose up -d
   ```

### Heroku Deployment (Backend)

1. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Set environment variables**
   ```bash
   heroku config:set FLASK_ENV=production
   heroku config:set MONGODB_URI=your-mongodb-uri
   # Set other environment variables
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment (Frontend)

1. **Connect repository to Vercel**
   ```bash
   vercel
   ```

2. **Set environment variables in Vercel dashboard**

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Python: PEP 8
- JavaScript: ESLint + Prettier
- React: Functional components with hooks

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@airesume.com or open an issue on GitHub.

## Acknowledgments

- Google Gemini API for AI-powered recommendations
- PyMuPDF for PDF parsing
- Tailwind CSS for beautiful UI components
- Flask and React communities

---

**Made with ❤️ by PARTHMISHRA-9**
