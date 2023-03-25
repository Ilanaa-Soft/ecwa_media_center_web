import axios, { InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const offlineErrorMessage = "NETWORK_ERROR: client is offline.";

axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!navigator.onLine) throw new Error(offlineErrorMessage);

    return config;
  },
  (ex) => {
    return Promise.reject(ex);
  }
);

axios.interceptors.response.use(undefined, (ex) => {
  const offlineError = !ex.response && ex.message === offlineErrorMessage;
  const expectedError =
    ex.response && ex.response.status >= 400 && ex.response.status < 500;

  if (offlineError) toast.info("You're currently offline.");
  else if (!expectedError) {
    // Call a log service to log unexpected errors

    // Notify the user
    toast.error("An unexpected error occurred.");
  }
  return Promise.reject(ex);
});

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
