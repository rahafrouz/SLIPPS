import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import app from "./reducers/app";
import search from "./reducers/search";

export default combineReducers({
  app,
  search,
  router: routerReducer
});
