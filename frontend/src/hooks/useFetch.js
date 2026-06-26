import { useState, useCallback } from 'react';
import api from './api';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get(url, options);
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  const refetch = useCallback(async () => {
    await fetch();
  }, [fetch]);

  return { data, loading, error, fetch, refetch };
};

export default useFetch;
