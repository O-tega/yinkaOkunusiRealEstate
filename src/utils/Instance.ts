import axios from "axios";

const Api = axios.create({
  baseURL: "https://dev-api-staging.mooyi.africa/v2/api",
  headers: {
    Accept: "application/json",
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
