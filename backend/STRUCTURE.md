# Backend API Structure

```
backend/
├── server.js                 # Express server setup
├── package.json              # Dependencies
├── .env.example              # Environment variables example
│
├── config/
│   ├── database.js          # MongoDB connection
│   └── config.js            # Configuration variables
│
├── models/
│   ├── User.js              # User model with auth methods
│   ├── Resume.js            # Resume model
│   ├── Analysis.js          # Analysis results model
│   └── Token.js             # Token management model
│
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── userController.js    # User management
│   ├── resumeController.js  # Resume handling
│   └── analysisController.js # Analysis operations
│
├── routes/
│   ├── authRoutes.js        # Auth endpoints
│   ├── userRoutes.js        # User endpoints
│   ├── resumeRoutes.js      # Resume endpoints
│   └── analysisRoutes.js    # Analysis endpoints
│
├── middleware/
│   ├── auth.js              # Authentication & authorization
│   └── errorHandler.js      # Error handling
│
├── utils/
│   ├── AppError.js          # Custom error class
│   ├── logger.js            # Winston logger
│   ├── tokenUtils.js        # JWT token generation
│   ├── emailUtils.js        # Email sending utility
│   └── fileUtils.js         # File handling utility
│
├── services/
│   ├── resumeService.js     # Resume processing
│   ├── analysisService.js   # Analysis service
│   └── aiService.js         # AI/ML integration
│
├── logs/
│   ├── error.log           # Error logs
│   └── combined.log        # All logs
│
└── uploads/                # Uploaded files storage
```
