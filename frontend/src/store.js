import Provider from "react-redux";
import logger from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducer";
import { routerMiddleware } from "react-router-redux";
import { promiseMiddleware, localStorageMiddleware } from "./middleware";


// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, logger);
  // if (process.env.NODE_ENV === "production") {
  //   return applyMiddleware(myRouterMiddleware);
  // } else {
  //   // Enable additional logging in non-production environments.
  //   return applyMiddleware(myRouterMiddleware, logger);
  // }
};

export const store = createStore(reducer, getMiddleware());
