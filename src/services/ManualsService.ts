import http from "./httpService";
import { getHeaders } from "./authService";

const apiEndpoint = "/sunday-school";

const headers = getHeaders();

export function getAllManuals() {
  return http.get<Manual[]>(`${apiEndpoint}/all`, headers);
}

export function getUnPaidManuals() {
  return http.get<Manual[]>(`${apiEndpoint}/unpaid`, headers);
}

export function getManualsCategories() {
  return http.get(`${apiEndpoint}/categories`, headers);
}

export function savePayment(request: ManualPayInfo) {
  return http.post(`${apiEndpoint}/pay`, request, headers);
}

export function sponsorManual(request: SponsorManual, id: number) {
  return http.post(`${apiEndpoint}/assign/${id}`, request, headers);
}

export function claimManual(id: number) {
  return http.post(`${apiEndpoint}/claim/${id}`, {}, headers);
}
