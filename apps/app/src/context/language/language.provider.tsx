import { useMemo, useState } from "react";
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

  const [language, setLanguage] = useState<"en" | "ar">("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: (language: "en" | "ar") => setLanguage(language),
        t: (key) => translations[language][key] ?? key,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
