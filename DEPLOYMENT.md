# AI Resume Analyzer - Production Deployment Guide

## Technology Stack

### Frontend
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Build Tool**: Create React App / Vite
- **UI Components**: React Icons, React Hot Toast

### Backend
- **Framework**: Express.js
- **Runtime**: Node.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Upload**: Multer
- **Logging**: Winston
- **Security**: Helmet, CORS, Mongo Sanitize

### AI/ML Service
- **Framework**: FastAPI
- **Python Version**: 3.9+
- **Resume Parsing**: PyPDF2, python-docx
- **NLP**: NLTK, scikit-learn
- **Data Processing**: Pandas, NumPy

## Project Structure Overview

```
AI-Resume-Analyser/
├── frontend/                    # React application
│   ├── public/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── pages/              # Page components
│   │   ├── context/            # Context providers
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # API services
│   │   ├── utils/              # Utilities & helpers
│   │   ├── config/             # Configuration
│   │   ├── api/                # API client setup
│   │   ├── App.jsx             # Main App component
│   │   └── index.jsx           # Entry point
│   ├── package.json
│   └── .env.example
│
├── backend/                     # Express API
│   ├── config/                 # Database & config
│   ├── models/                 # Database models
│   ├── controllers/            # Route controllers
│   ├── routes/                 # API routes
│   ├── middleware/             # Middleware
│   ├── services/               # Business logic
│   ├── utils/                  # Utilities
│   ├── server.js               # Server entry point
│   ├── package.json
│   └── .env.example
│
├── ai_service/                  # Python AI Service
│   ├── models/                 # AI/ML models
│   ├── routes/                 # FastAPI routes
│   ├── utils/                  # Utilities
│   ├── main.py                 # FastAPI entry point
│   ├── requirements.txt
│   └── .env.example
│
└── README.md                    # Project documentation
```

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.9+
- MongoDB
- Git

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
# Update REACT_APP_API_BASE_URL if needed
npm start
```

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update environment variables
npm run dev
```

### AI Service Setup

```bash
cd ai_service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Update environment variables
python main.py
```

## Environment Variables

### Frontend (.env.local)
```
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_API_TIMEOUT=30000
```

### Backend (.env)
```
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-resume-analyzer
JWT_SECRET=your_secret_key
```

### AI Service (.env)
```
PORT=8000
BACKEND_URL=http://localhost:5000
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh-token` - Refresh JWT token

### User
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update profile
- `POST /api/user/change-password` - Change password
- `DELETE /api/user/account` - Delete account
- `GET /api/user/stats` - Get user statistics

### Resume
- `POST /api/resume/upload` - Upload resume
- `GET /api/resume` - Get all resumes
- `GET /api/resume/:id` - Get resume details
- `DELETE /api/resume/:id` - Delete resume
- `POST /api/resume/:id/analyze` - Analyze resume

### Analysis
- `GET /api/analysis` - Get all analyses
- `GET /api/analysis/:id` - Get analysis details
- `GET /api/analysis/:id/report` - Get analysis report
- `GET /api/analysis/ats-score/:resumeId` - Get ATS score
- `GET /api/analysis/keywords/:resumeId` - Get keyword analysis
- `GET /api/analysis/suggestions/:resumeId` - Get suggestions

## Features

✅ User authentication with JWT
✅ Resume upload and management
✅ ATS compatibility scoring
✅ Keyword analysis and matching
✅ AI-powered suggestions
✅ Detailed analysis reports
✅ Dark mode support
✅ Responsive design
✅ Real-time notifications
✅ File upload with progress tracking

## Security Considerations

- All API endpoints use JWT authentication
- Passwords are hashed with bcryptjs
- File uploads are validated and sanitized
- CORS enabled with specific origins
- MongoDB injection prevention with mongo-sanitize
- Helmet for HTTP header security
- Input validation on all endpoints

## Deployment

### Docker Setup

Create Dockerfile for each service:

```dockerfile
# Frontend Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production
- Use secure JWT secrets
- Set NODE_ENV=production
- Configure MONGODB_URI to production database
- Set appropriate CORS origins
- Enable HTTPS

## Performance Optimization

- Compression middleware enabled
- Database query optimization
- File upload size limits
- Caching strategies
- Code splitting in React

## Monitoring & Logging

- Winston logger for backend
- Request logging with Morgan
- Error tracking and reporting
- User activity logging

## Support & Documentation

For detailed documentation, visit: `/docs`

## License

MIT License
