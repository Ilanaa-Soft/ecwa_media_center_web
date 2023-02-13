import http from "./httpService";

const apiEndpoint = "/user";

export function getHeaders() {
  const userStr = localStorage.getItem("user");

  if (!userStr) return;

  const user = JSON.parse(userStr);
  return { headers: { apiToken: user.api_token } };
}

export function requestLoginCode(data: RequestLoginCode) {
  return http.post(`${apiEndpoint}/login/send-code`, data);
}

export function loginWithCode(data: LoginWithCode) {
  return http.post(`${apiEndpoint}/login/verify`, data);
}

export function signUp(data: SignUp) {
  return http.post(`${apiEndpoint}/create`, data);
}
