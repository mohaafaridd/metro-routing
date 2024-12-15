import { useContext } from "react";
import { ThemeContext } from "./theme.context";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within an ThemeProvider");
  }
  return context;
};
