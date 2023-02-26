import http from "./httpService";
import { getHeaders } from "./authService";
import { User, UserUpdateProfile } from "../types";

const apiEndpoint = "/user";

const headers = getHeaders();

export function updateUser(request: UserUpdateProfile) {
  return http.post<User>(`${apiEndpoint}/update`, request, headers);
}
