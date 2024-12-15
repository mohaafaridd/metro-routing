import { useContext } from "react";
import { LanguageContext } from "./language.context";

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within an LanguageProvider",
    );
  }
  return context;
};
