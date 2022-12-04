import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import GlobalContex from "./Components/utils/GlobalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContex>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalContex>
  </React.StrictMode>
);
