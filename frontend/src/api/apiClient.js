import axios from 'axios';
import { API_BASE_URL, API_TIMEOUT } from '../utils/constants';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`);
        const { token } = response.data;
        localStorage.setItem('token', token);
        apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
        return apiClient(originalRequest);
      } catch (err) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
