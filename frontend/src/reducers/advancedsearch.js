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
  case SET_TAG:
    console.warn("this is inside reducer: SET_TAG ",action);
    return{
      ...state,
      keywords: true,
      tags:{
        any:{
          tags:["doodooli"]
        },
        all:{
          tags:["dkdjfklajds"]
        }
      }
    };
  default:
    return state;
  }
};
