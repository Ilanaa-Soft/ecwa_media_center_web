import http from "./httpService";
import { getHeaders } from "./authService";
import {
  Manual,
  UserManual,
  ManualPayInfo,
  SponsorManual,
  TopicNote,
  TopicNoteUpdate,
} from "../types";

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

export function getUserManual(manualId: number) {
  return http.get<UserManual>(
    `${apiEndpoint}/user-manual/${manualId}`,
    headers
  );
}

export function savePayment(request: ManualPayInfo) {
  return http.post(`${apiEndpoint}/pay`, request, headers);
}

export function sponsorManual(request: SponsorManual, manualId: number) {
  return http.post(`${apiEndpoint}/assign/${manualId}`, request, headers);
}

export function getSponsors(manualId: number) {
  return http.get(`${apiEndpoint}/recipients/${manualId}`, headers);
}

export function revokeManual(manualId: number, request: { email: string }) {
  return http.post(`${apiEndpoint}/revoke/${manualId}`, request, headers);
}

export function claimManual(manualId: number) {
  return http.post(`${apiEndpoint}/claim/${manualId}`, {}, headers);
}

export function markTopicAsRead(topicId: number) {
  return http.put(`${apiEndpoint}/topics/${topicId}/read`, {}, headers);
}

export function getNotes(topicId: number) {
  return http.get<TopicNote[]>(
    `${apiEndpoint}/note/search/${topicId}`,
    headers
  );
}

export function saveNote(request: TopicNoteUpdate) {
  return http.post(`${apiEndpoint}/note/create`, request, headers);
}

export function updateNote(request: TopicNoteUpdate, noteId: number) {
  return http.post(`${apiEndpoint}/note/edit/${noteId}`, request, headers);
}
