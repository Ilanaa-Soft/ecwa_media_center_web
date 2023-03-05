import { User } from "./user";
import { Hymn } from "./hymn";
import { Manual, ManualPayInfo } from "./manual";

export type AppState = {
  user: User;
  hymns: Hymn[];
  manuals: Manual[];
  manualPayInfo: ManualPayInfo;
};

export type AppActionTypes =
  | { type: "SET_MANUALS"; payload: Manual[] }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_APP_DATA"; payload: any }
  | { type: "SET_MANUAL_PAYMENT"; payload: ManualPayInfo };
