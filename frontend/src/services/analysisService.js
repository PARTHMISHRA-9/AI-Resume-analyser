import api from './api';

const analysisService = {
  /**
   * Analyze a resume against a job description
   * @param {string} resumeId - Resume ID
   * @param {string} jobDescription - Job description text
   * @returns {Promise}
   */
  analyzeResume: async (resumeId, jobDescription) => {
    const response = await api.post('/analysis/analyze', {
      resumeId,
      jobDescription,
    });
    return response.data;
  },

  /**
   * Get AI-powered recommendations
   * @param {string} resumeText - Resume text content
   * @param {string} jobDescription - Job description text
   * @returns {Promise}
   */
  getRecommendations: async (resumeText, jobDescription) => {
    const response = await api.post('/analysis/recommendations', {
      resumeText,
      jobDescription,
    });
    return response.data;
  },

  /**
   * Get analysis history
   * @param {number} page - Page number (default: 1)
   * @param {number} limit - Items per page (default: 10)
   * @returns {Promise}
   */
  getHistory: async (page = 1, limit = 10) => {
    const response = await api.get('/analysis/history', {
      params: { page, limit },
    });
    return response.data;
  },

  /**
   * Get a specific analysis
   * @param {string} analysisId - Analysis ID
   * @returns {Promise}
   */
  getAnalysis: async (analysisId) => {
    const response = await api.get(`/analysis/${analysisId}`);
    return response.data;
  },

  /**
   * Generate interview preparation
   * @param {string} resumeText - Resume text
   * @param {string} jobDescription - Job description
   * @returns {Promise}
   */
  getInterviewPrep: async (resumeText, jobDescription) => {
    const response = await api.post('/analysis/interview-prep', {
      resumeText,
      jobDescription,
    });
    return response.data;
  },

  /**
   * Generate career advice
   * @param {string} resumeText - Resume text
   * @returns {Promise}
   */
  getCareerAdvice: async (resumeText) => {
    const response = await api.post('/analysis/career-advice', {
      resumeText,
    });
    return response.data;
  },

  /**
   * Delete an analysis
   * @param {string} analysisId - Analysis ID
   * @returns {Promise}
   */
  deleteAnalysis: async (analysisId) => {
    const response = await api.delete(`/analysis/${analysisId}`);
    return response.data;
  },
};

export default analysisService;
