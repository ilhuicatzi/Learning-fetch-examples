import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource-variable/outfit";
import { ThemeProvider } from "./contexts/ThemeProvider.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HashRouter>
          <NextUIProvider>
            <App />
          </NextUIProvider>
        </HashRouter>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
