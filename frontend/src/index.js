import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router, Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import App from "./components/App";
import "./index.css";

import "./sass/style.scss";
import "./sass/menu.scss";
import "./sass/blog.scss";
import "./sass/App.scss";

const history = createHistory();
ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </div>
      </Router>
    </Provider>
  ), document.getElementById("root")
);
