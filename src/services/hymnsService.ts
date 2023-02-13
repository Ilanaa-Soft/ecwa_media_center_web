import http from "./httpService";
import { getHeaders } from "./authService";

const apiEndpoint = "/hymns";

const headers = getHeaders();

export function getAllHymns() {
  return http.get(`${apiEndpoint}/all`, headers);
}

export function getHymnsCategories() {
  return http.get(`${apiEndpoint}/categories`, headers)
}