declare global {
  interface Window {
    config: {
      REACT_APP_API_BASE_URL: string | undefined;
    };
  }
}
export {};
