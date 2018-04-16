import {
  REDIRECT,
  LOGOUT,
  APP_LOAD,
  LOGIN,
  REGISTER,
  APP_INIT
} from "../constants/actionTypes";

const defaultState = {
  keyword: "",
  redirectTo: null,
  appName: "slipps",
  token: null,
  initData: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case APP_LOAD:
    return {
      ...state,
      token: action.token || null,
      appLoaded: true,
      currentUser: action.payload ? action.payload : null,
      // initData: action.payload.initData
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
  default:
    return state;
  }
};
