import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "mobx-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { InventoryStore } from "./store/Inventory/Inventory";

const inventoryStore = new InventoryStore();

const stores = {
  inventoryStore,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
