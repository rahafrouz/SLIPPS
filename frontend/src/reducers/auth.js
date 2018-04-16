import {
  LOGIN,
  REGISTER,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  ASYNC_END,
  UPDATE_FIELD_AUTH,
} from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
  case LOGIN:
  case REGISTER:
    return {
      ...state,
      inProgress: false,
      errors: action.error ? action.payload.response.body : null
    };
  case LOGIN_PAGE_UNLOADED:
  case REGISTER_PAGE_UNLOADED:
    return {};
  case ASYNC_START:
    if (action.subtype === LOGIN || action.subtype === REGISTER) {
      return { ...state, inProgress: true };
    }
    break;
  // case ASYNC_END:
  //   if (action.subtype === LOGIN) {
  //     return { ...state, userInfo: action.promise.user };
  //   }
  //   break;
  case UPDATE_FIELD_AUTH:
    return { ...state, [action.key]: action.value };
  default:
    return state;
  }

  return state;
};
