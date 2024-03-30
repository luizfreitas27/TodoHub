import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./providers/loginContext.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <App />
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);
