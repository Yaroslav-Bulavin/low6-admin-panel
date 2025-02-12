const config = window.config;

if (!config) {
  window.config = {
    REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  };
}

export const API_BASE_URL = window.config.REACT_APP_API_BASE_URL as string;
