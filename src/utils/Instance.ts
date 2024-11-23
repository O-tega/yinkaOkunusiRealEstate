import axios from "axios";

const Api = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_NODE_ENV !== "production"
      ? `${import.meta.env.VITE_REACT_APP_STAGING_URL}`
      : `${import.meta.env.VITE_REACT_APP_BACKEND_LIVE_URL}`,
});

export default Api;
