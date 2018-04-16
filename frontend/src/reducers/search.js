import { 
  SET_KEYWORD,
  SEARCH_BY_KEYWORD,
  TOGGLE_ADVANCED_SEARCH,
  SET_TAG,
  ENABLE_SEARCH_BUTTON,
  DO_ADVANCED_SEARCH,
  SET_SEARCH_PARAMS,
} from "../constants/actionTypes";

const defaultState = {
  isAvancedSearchHidden: true,
  keywords: true,
  tags: {
    any: {
      tags: []
    },
    all: {
      tags: []
    }
  },
  enableSearch: false,
  searchParams: {}
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
  case SET_TAG:
    console.warn("this is inside reducer: SET_TAG ", action);
    return {
      ...state,
      keywords: true,
      tags: action.payload.tags
    };
  case DO_ADVANCED_SEARCH:
    return {
      ...state,
      searchResult: action.payload[0]
    };
  case ENABLE_SEARCH_BUTTON:
    return {
      ...state,
      enableSearch: action.payload.enableSearch
    };
  case SET_SEARCH_PARAMS:
    return {
      ...state,
      searchParams: action.payload.searchParams
    };
  default:
    return state;
  }
};
