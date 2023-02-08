import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import App from "./App";

import { Provider } from "react-redux";
import Store from "./Store";
import Header from "./Components/Header";
import Hooks from "./Components/Hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Provider store={Store}>
      {/* <Header /> */}
      {/* <Hooks /> */}
      <App />
    </Provider>
  </Router>
);

