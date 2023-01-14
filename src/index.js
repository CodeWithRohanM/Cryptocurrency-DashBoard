import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import ExchangeCoins from "./Components/ExchangeCoins";

import { Provider } from "react-redux";
import Store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

