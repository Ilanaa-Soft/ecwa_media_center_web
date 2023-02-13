import http from "./httpService";
import { getHeaders } from "./authService";

const apiEndpoint = "/user";

const headers = getHeaders();

export function updateUser(request: UserUpdateProfile) {
  return http.post<User>(`${apiEndpoint}/update`, request, headers);
}
