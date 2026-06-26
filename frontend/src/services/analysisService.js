import apiClient from './apiClient';

const analysisService = {
  getAnalyses: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/analysis', { params: { page, limit } });
    return response.data;
  },

  getAnalysis: async (id) => {
    const response = await apiClient.get(`/analysis/${id}`);
    return response.data;
  },

  getAnalysisReport: async (id) => {
    const response = await apiClient.get(`/analysis/${id}/report`);
    return response.data;
  },

  getATSScore: async (resumeId) => {
    const response = await apiClient.get(`/analysis/ats-score/${resumeId}`);
    return response.data;
  },

  getKeywordAnalysis: async (resumeId) => {
    const response = await apiClient.get(`/analysis/keywords/${resumeId}`);
    return response.data;
  },

  getSuggestions: async (resumeId) => {
    const response = await apiClient.get(`/analysis/suggestions/${resumeId}`);
    return response.data;
  },
};

export default analysisService;
