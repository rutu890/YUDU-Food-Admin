export const env = {
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1",
  USE_MOCKS: import.meta.env.VITE_USE_MOCKS !== "false",
};
