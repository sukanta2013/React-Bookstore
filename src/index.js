import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/appContainer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(allReducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
