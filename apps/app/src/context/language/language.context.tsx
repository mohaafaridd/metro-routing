import { createContext } from "react";

interface LanguageContextType {
  language: "en" | "ar";
  setLanguage: (language: "en" | "ar") => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});
