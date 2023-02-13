const reducer = (state: AppState, action: AppActionTypes) => {
  switch (action.type) {
    case "SET_APP_DATA":
      return {
        ...state,
        user: action.payload.user,
        manuals: action.payload.manuals,
        hymns: action.payload.hymns
      };

    case "SET_MANUALS":
      return { ...state, manuals: action.payload };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
