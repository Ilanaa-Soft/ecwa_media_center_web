import http from "./httpService";
import { getHeaders } from "./authService";
import { Account, Wallet } from "../types/payment";

const apiEndpoint = "/payment";

const headers = getHeaders();

export function createAccount() {
  return http.post<Account>(`/paystack/create-account`, {}, headers);
}

export function getWallet() {
  return http.get<Wallet>(`${apiEndpoint}/wallet/balance`, headers);
}
