import {
  REDIRECT,
  LOGOUT,
  APP_LOAD,
  LOGIN,
  REGISTER,
  UPLOAD_DOCUMENT,
} from "../constants/actionTypes";

const defaultState = {
  keyword: "",
  redirectTo: null,
  appName: "slipps",
  token: null,
  initData: {},
  appLoaded: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case APP_LOAD:
    return {
      ...state,
      token: action.error ? null : action.token,
      appLoaded: true,
      currentUser: action.payload[0] ? action.payload[0] : null,
      initData: action.payload[1]
    };
  case REDIRECT:
    return { ...state, redirectTo: null };
  case LOGOUT:
    return { ...state, redirectTo: "/", token: null, currentUser: null };
  case LOGIN:
    return {
      ...state,
      redirectTo: action.error ? null : "/profile",
      token: action.error ? null : action.payload.user.token,
      currentUser: action.error ? null : action.payload.user
    };
  case REGISTER:
    return {
      ...state,
      redirectTo: action.error ? null : "/login"
    };
  case UPLOAD_DOCUMENT:
    return {
      ...state,
      redirectTo: action.error ? null : "/profile",
    };
  default:
    return state;
  }
};
