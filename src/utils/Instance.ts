import axios from "axios";

const Api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_NODE_ENV !== "production"
      ? `${import.meta.env.VITE_REACT_APP_STAGING_URL}`
      : `${import.meta.env.VITE_REACT_APP_BACKEND_LIVE_URL}`,
  headers: {
    Accept: "application/json",
    "i-am-mooyi-dev": "c27eb735-6a16-423e-8ea6-af1c4e6ac1a5",
  },
});

Api.interceptors.request.use(
  (config) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ2ZGIyZTIyYTgxYmQ3MTRiOTMzNTg1Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg0OTEwODUzfQ.U48FPuU38nFG2fPHqqWvUA9e0D3x4lQ3Oy5DWxjSX0U";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default Api;
