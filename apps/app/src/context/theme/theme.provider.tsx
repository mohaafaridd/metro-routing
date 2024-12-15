import { useEffect, useState } from "react";
import { ThemeContext } from "./theme.context";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTheme = () => {
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else if (theme === "light") {
      root.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      root.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches,
      );
      localStorage.removeItem("theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
