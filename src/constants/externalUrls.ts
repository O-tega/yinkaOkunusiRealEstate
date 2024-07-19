const env = import.meta.env.VITE_REACT_APP_NODE_ENV;

export const URLS = {
  MOOYI_APP:
    env === "production"
      ? `${import.meta.env.VITE_REACT_APP_PUBLIC_FRONTEND_BASE_URL}`
      : env === "development"
      ? `${import.meta.env.VITE_REACT_APP_STAGING_SIGNUP_BASE_URL}`
      : "",
  MOOYI_WEB:
    env === "production"
      ? `${import.meta.env.VITE_REACT_APP_MOOYI_WEB}`
      : env === "development"
      ? `${import.meta.env.VITE_REACT_APP_MOOYI_STAGING_WEB}`
      : "",
};

export const ROUTES = {
  LOGIN: URLS.MOOYI_APP,
  REGISTER: URLS.MOOYI_APP + "/auth/register",
  PRIVACY_POLICY: URLS.MOOYI_WEB + "/privacy-policy",
  COOKIE_POLICY: URLS.MOOYI_WEB + "/cookie-policy",
  TERM_OF_USE: URLS.MOOYI_WEB + "/terms-of-use",
};
