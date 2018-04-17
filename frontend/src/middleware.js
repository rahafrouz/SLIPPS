import agent from "./agent";
import {
  ASYNC_START,
  ASYNC_END,
  REGISTER,
  LOGIN,
  LOGOUT,
  APP_LOAD
} from "./constants/actionTypes";

const promiseMiddleware = store => next => action => {
  if (isPromise(action.payload)) {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    // const currentView = store.getState().viewChangeCounter;
    // const skipTracking = action.skipTracking;

    action.payload.then(
      res => {
        const currentState = store.getState();
        // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
        //   return;
        // }
        console.log("RESULT", res);
        action.payload = res;
        store.dispatch({ type: ASYNC_END, subtype: action.type, promise: action.payload });
        store.dispatch(action);
      },
      error => {
        const currentState = store.getState();
        // if (!skipTracking && currentState.viewChangeCounter !== currentView) {
        //   return;
        // }
        console.log("ERROR", error);
        action.error = true;
        action.payload = error;
        if (!action.skipTracking) {
          store.dispatch({ type: ASYNC_END, promise: action.payload });
        }
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {
  if (action.type === REGISTER || action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem("jwt", action.payload.token);
      agent.setToken(action.payload.token);
    }
  } else if (action.type === LOGOUT || (action.type === APP_LOAD && action.error)) {
    window.localStorage.setItem("jwt", "");
    agent.setToken(null);
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === "function";
}


export { promiseMiddleware, localStorageMiddleware };
