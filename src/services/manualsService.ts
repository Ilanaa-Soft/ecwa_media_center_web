import http from "./httpService";
import { getHeaders } from "./authService";
import {
  Manual,
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

export function savePayment(request: ManualPayInfo) {
  return http.post(`${apiEndpoint}/pay`, request, headers);
}

export function sponsorManual(request: SponsorManual, id: number) {
  return http.post(`${apiEndpoint}/assign/${id}`, request, headers);
}

export function claimManual(id: number) {
  return http.post(`${apiEndpoint}/claim/${id}`, {}, headers);
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

export function updateNote(request: TopicNoteUpdate, topicId: number) {
  return http.post(`${apiEndpoint}/note/edit/${topicId}`, request, headers);
}
