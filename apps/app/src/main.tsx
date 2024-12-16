import { AppProvider } from "@/context/app/app.provider";
import { LanguageProvider } from "@/context/language/language.provider";
import { ThemeProvider } from "@/context/theme/theme.provider";
import "flag-icons/css/flag-icons.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Home.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AppProvider>
          <Home />
        </AppProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
