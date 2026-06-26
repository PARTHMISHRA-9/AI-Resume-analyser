const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema(
  {
    resumeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Resume',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    atsScore: {
      type: Number,
      required: true,
    },
    keywordAnalysis: {
      found: [String],
      missing: [String],
      score: Number,
    },
    formattingAnalysis: {
      issues: [String],
      score: Number,
      recommendations: [String],
    },
    experienceAnalysis: {
      score: Number,
      gaps: [String],
      recommendations: [String],
    },
    suggestions: [
      {
        category: String,
        suggestion: String,
        impact: { type: String, enum: ['high', 'medium', 'low'] },
        priority: Number,
      },
    ],
    overallScore: {
      type: Number,
      required: true,
    },
    report: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Analysis', analysisSchema);
