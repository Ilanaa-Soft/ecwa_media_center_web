import http from "./httpService";
import { getHeaders } from "./authService";
import { User, UserUpdateProfile, Dashboard } from "../types";

const apiEndpoint = "/user";

const headers = getHeaders();

export function updateUser(request: UserUpdateProfile) {
  return http.post<User>(`${apiEndpoint}/update`, request, headers);
}

export function getDashboard() {
  return http.get<Dashboard>(`${apiEndpoint}/dashboard`, headers);
}
