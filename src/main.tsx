import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/gateway.ts";
import { CookiesProvider } from "react-cookie";
import ScrollToTop from "./components/common/ScrollToTop.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <App />
        </CookiesProvider>
        <ScrollToTop />
      </BrowserRouter>
    </QueryClientProvider>
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>,
);
