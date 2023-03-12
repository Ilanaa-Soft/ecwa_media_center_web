import { AppActionTypes, AppState } from "../types";

const reducer = (state: AppState, action: AppActionTypes) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        manuals: action.payload.manuals,
        hymns: action.payload.hymns,
        dashboard: action.payload.dashboard,
      };

    case "SET_MANUALS":
      return {
        ...state,
        manuals: action.payload,
        manualPayInfo: null,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_MANUAL_PAYMENT":
      return {
        ...state,
        manualPayInfo: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
