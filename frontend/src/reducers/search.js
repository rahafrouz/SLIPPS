import { 
  SET_KEYWORD,
  SEARCH_BY_KEYWORD,
  TOGGLE_ADVANCED_SEARCH,
} from "../constants/actionTypes";

const defaultState = {
  isAvancedSearchHidden: true
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_KEYWORD:
    return {
      ...state,
      keyword: action.payload.keyword
    };
  case SEARCH_BY_KEYWORD:
    return {
      ...state,
      searchResult: action.payload[0]
    };
  case TOGGLE_ADVANCED_SEARCH: 
    return {
      ...state,
      isAvancedSearchHidden: action.payload.isAvancedSearchHidden
    };
  default:
    return state;
  }
};
