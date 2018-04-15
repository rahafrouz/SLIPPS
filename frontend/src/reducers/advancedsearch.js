import { 
  SET_KEYWORD,
  SEARCH_BY_KEYWORD,
  TOGGLE_ADVANCED_SEARCH,
  SET_TAG,
  ENABLE_SEARCH_BUTTON,
} from "../constants/actionTypes";

const defaultState = {
  keywords: true,
  tags: {
    any: {
      tags: []
    },
    all: {
      tags: []
    }
  },
  enableSearch: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
  case SET_TAG:
    console.warn("this is inside reducer: SET_TAG ", action);
    return {
      ...state,
      keywords: true,
      tags: {
        any: {
          tags: action.payload.tags["any"]
          // tags:["doodooli"]
        },
        all: {
          tags: action.payload.tags["all"]
          // tags:["dkdjfklajds"]
        }
      }
    };
  case ENABLE_SEARCH_BUTTON:
    return {
      ...state,
      enableSearch: action.payload.enableSearch
    };
  default:
    return state;
  }
};
