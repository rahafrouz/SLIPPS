import { 
  SET_KEYWORD,
  SEARCH_BY_KEYWORD,
  TOGGLE_ADVANCED_SEARCH,
  SET_TAG
} from "../constants/actionTypes";

const defaultState = {
  keywords: true,
  tags:{
    any:{tags:{}},
    all:{tags:{}}
  }
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_KEYWORD:
    return {
      ...state,
      keyword: action.payload.keyword
    };
  case SET_TAG:
    console.error(action);
    return{
      ...state
    };
  default:
    return state;
  }
};
