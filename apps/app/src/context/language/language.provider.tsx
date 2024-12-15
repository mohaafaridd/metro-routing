import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./language.context";
import TranslationsJSON from "./translations.json";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const translations = useMemo<Record<string, Record<string, string>>>(
    () => TranslationsJSON,
    [],
  );

  const getInitialLanguage = () => {
    if (localStorage.language === "ar") return "ar";
    if (localStorage.language === "en") return "en";
    return "en";
  };
  const [language, setLanguage] = useState<"en" | "ar">(getInitialLanguage);

  useEffect(() => {
    const root = document.documentElement;
    if (language === "ar") {
      root.dir = "rtl";
      localStorage.language = "ar";
    } else if (language === "en") {
      root.dir = "ltr";
      localStorage.language = "en";
    }
  }, [language]);

  const translate = (key: string, params: Record<string, string> = {}) => {
    const final = translations[language][key]?.replace(
      /{{(.*?)}}/g,
      (match, p1) => params[p1] ?? match,
    );

    return final;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (language: "en" | "ar") => setLanguage(language),
        t: translate,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
