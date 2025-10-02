import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./store/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const logger = (store) => {
  return (next) => {
    return (action) => {
      // Access store, next, action
      console.log("[Middleware] dispatch ", action);
      const result = next(action); // Goto Next process so reducer can access action.
      console.log("[Middleware] next step ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(logger, thunk))
);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
