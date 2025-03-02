import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient} >
    <Provider store={store}>
    <AppRoutes />
    </Provider>
    </QueryClientProvider>
  </StrictMode>
);
