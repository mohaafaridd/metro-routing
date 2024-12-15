import { AppProvider } from "@/context/app/app.provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Home.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </StrictMode>,
);
