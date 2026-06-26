import React, { createContext, useState, useCallback } from 'react';

const AnalysisContext = createContext();

export const AnalysisProvider = ({ children }) => {
  const [analysis, setAnalysis] = useState(null);
  const [currentResume, setCurrentResume] = useState(null);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const setCurrentAnalysis = useCallback((analysisData) => {
    setAnalysis(analysisData);
    setError(null);
  }, []);

  const addToHistory = useCallback((entry) => {
    setAnalysisHistory(prev => [entry, ...prev]);
  }, []);

  const clearAnalysis = useCallback(() => {
    setAnalysis(null);
    setCurrentResume(null);
  }, []);

  const clearHistory = useCallback(() => {
    setAnalysisHistory([]);
  }, []);

  const value = {
    analysis,
    currentResume,
    analysisHistory,
    loading,
    error,
    setCurrentAnalysis,
    setCurrentResume,
    setLoading,
    setError,
    addToHistory,
    clearAnalysis,
    clearHistory,
  };

  return (
    <AnalysisContext.Provider value={value}>
      {children}
    </AnalysisContext.Provider>
  );
};

export default AnalysisContext;
