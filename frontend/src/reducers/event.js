import { 
  SET_EVENT_ID,
  ASYNC_START,
  GET_EVENT
} from "../constants/actionTypes";

const defaultState = {
  isLoading: false,
  eventId: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_EVENT_ID:
    return {
      ...state,
      eventId: action.payload.eventId,
    };
  case GET_EVENT:
    return {
      ...state,
      eventObj: action.payload[0],
      isLoading: false
    };
  // case ASYNC_START:
  //   if (action.subtype === GET_EVENT) {
  //     return { ...state, isLoading: true };
  //   }
  //   break;
  default:
    return state;
  }
};
