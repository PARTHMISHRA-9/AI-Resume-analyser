import React, { createContext, useContext, useState, useCallback } from 'react';

const AnalysisContext = createContext(null);

export const AnalysisProvider = ({ children }) => {
  const [currentAnalysis, setCurrentAnalysis] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setAnalysis = useCallback((analysis) => {
    setCurrentAnalysis(analysis);
    setError(null);
  }, []);

  const addToHistory = useCallback((analysis) => {
    setAnalysisHistory((prev) => [analysis, ...prev]);
  }, []);

  const clearHistory = useCallback(() => {
    setAnalysisHistory([]);
  }, []);

  const clearCurrent = useCallback(() => {
    setCurrentAnalysis(null);
  }, []);

  const value = {
    currentAnalysis,
    analysisHistory,
    loading,
    error,
    setAnalysis,
    addToHistory,
    clearHistory,
    clearCurrent,
    setLoading,
    setError,
  };

  return <AnalysisContext.Provider value={value}>{children}</AnalysisContext.Provider>;
};

export const useAnalysis = () => {
  const context = useContext(AnalysisContext);
  if (!context) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
};

export default useAnalysis;
