import { Hymn } from "./hymn";
import { Manual, ManualPayInfo } from "./manual";
import { Dashboard, User } from "./user";

export type AppState = {
  user: User;
  hymns: Hymn[];
  manuals: Manual[];
  manualPayInfo?: ManualPayInfo | null;
  dashboard: Dashboard;
};

export type AppActionTypes =
  | { type: "SET_MANUALS"; payload: Manual[] }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_INITIAL_STATE"; payload: AppState }
  | { type: "SET_MANUAL_PAYMENT"; payload: ManualPayInfo };
