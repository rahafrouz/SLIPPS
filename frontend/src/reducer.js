import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import app from "./reducers/app";
import search from "./reducers/search";
import auth from "./reducers/auth";
import event from "./reducers/event";

export default combineReducers({
  app,
  search,
  auth,
  event,
  router: routerReducer
});
