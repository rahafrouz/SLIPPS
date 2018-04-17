import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Router, Route, Switch } from "react-router";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
// import root from "window-or-global";

import App from "./components/App";
// import AdvancedSearch from "./pages/AdvancedSearch";
// import ResultPage from "./pages/ResultPage";
// import LoginPage from "./pages/LoginPage";
// import ProfilePage from "./pages/ProfilePage";
// import DocumentUpload from "./pages/DocumentUpload";
// import RegisterPage from "./pages/RegisterPage";
// import EventDescription from "./pages/EventDescription";
// import About from "./pages/About";
// import EventLarge from "./components/EventLarge.js";

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

          {/*<Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/advanced-search" component={AdvancedSearch} />
            <Route path="/search/:keyword" component={ResultPage} />
            <Route path="/upload" component={DocumentUpload} />
            <Route path="/event/:eventid" component={EventDescription} />
            <Route path="/desc" component={EventDescription} />
            <Route path="/about" component={About} />
            <Route path="/testingevents" component={EventLarge} />
          </Switch>*/}
        </div>
      </Router>
    </Provider>
  ), document.getElementById("root")
);
