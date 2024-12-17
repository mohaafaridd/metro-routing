import { useLanguageContext } from "../../context/language";

export const Credits = () => {
  const { t } = useLanguageContext();
  return (
    <p className="rounded-lg bg-gray-200 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400">
      {t("made-by")}{" "}
      <a
        href="https://www.linkedin.com/in/mohaafaridd/"
        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("mohammad-farid")}
      </a>
    </p>
  );
};
