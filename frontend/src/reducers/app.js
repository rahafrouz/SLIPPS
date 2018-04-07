import {
  REDIRECT,
  LOGOUT,
} from "../constants/actionTypes";

const defaultState = {
  keyword: "",
  searchResult: {},
  redirectTo: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case REDIRECT:
    return { ...state, redirectTo: null };
  default:
    return state;
  }
};
