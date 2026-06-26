const axios = require('axios');
const config = require('../config/config');
const logger = require('./logger');
const fs = require('fs');

const sendResumeForAnalysis = async (resumePath) => {
  try {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(resumePath));

    const response = await axios.post(
      `${config.PYTHON_SERVICE_URL}/analyze`,
      formData,
      {
        headers: formData.getHeaders(),
        timeout: 300000, // 5 minutes
      }
    );

    return response.data;
  } catch (error) {
    logger.error('AI service error:', error);
    throw error;
  }
};

const parseAIResponse = (aiData) => {
  return {
    atsScore: aiData.ats_score || 0,
    keywordAnalysis: {
      found: aiData.keywords_found || [],
      missing: aiData.keywords_missing || [],
      score: aiData.keyword_score || 0,
    },
    formattingAnalysis: {
      issues: aiData.formatting_issues || [],
      score: aiData.formatting_score || 0,
      recommendations: aiData.formatting_recommendations || [],
    },
    experienceAnalysis: {
      score: aiData.experience_score || 0,
      gaps: aiData.experience_gaps || [],
      recommendations: aiData.experience_recommendations || [],
    },
    suggestions: aiData.suggestions || [],
    overallScore: aiData.overall_score || 0,
    report: aiData.report || {},
  };
};

module.exports = { sendResumeForAnalysis, parseAIResponse };
