# Python AI/ML Service for Resume Analysis

```
ai_service/
├── main.py                      # FastAPI server setup
├── requirements.txt             # Python dependencies
├── .env.example                 # Environment variables
│
├── models/
│   ├── resume_parser.py        # PDF/Word resume parsing
│   ├── ats_scorer.py           # ATS compatibility scoring
│   ├── keyword_extractor.py    # Keyword extraction & matching
│   └── suggestion_engine.py    # AI-powered suggestions
│
├── utils/
│   ├── logger.py               # Logging utility
│   ├── validators.py           # Input validation
│   └── config.py               # Configuration
│
├── routes/
│   └── analysis.py             # Analysis endpoints
│
└── data/
    ├── job_keywords.json       # Industry keywords database
    └── templates/              # Resume templates for reference
```
