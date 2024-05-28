import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/gateway.ts";
import CookieBanner from "./components/Web/CookieBanner.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CookieBanner />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
