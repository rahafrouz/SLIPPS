import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import app from "./reducers/app";
import search from "./reducers/search";
import advancedsearch from "./reducers/advancedsearch";
import auth from "./reducers/auth";

export default combineReducers({
  app,
  search,
  advancedsearch,
  auth,
  router: routerReducer
});
