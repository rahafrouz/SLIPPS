import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import app from "./reducers/app";
import search from "./reducers/search";
import advancedsearch from "./reducers/advancedsearch";

export default combineReducers({
  app,
  search,
  advancedsearch,
  router: routerReducer
});
