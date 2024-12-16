import { useLanguageContext } from "@/context/language/";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguageContext();

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        disabled={language === "en"}
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        className="inline-flex items-center rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400"
      >
        <span className="fi fi-us me-2"></span>
        English
      </button>

      <button
        onClick={() => setLanguage(language === "en" ? "ar" : "en")}
        disabled={language === "ar"}
        type="button"
        className="inline-flex items-center rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400"
      >
        <span className="fi fi-eg me-2"></span>
        عربي
      </button>
    </div>
  );
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        checked={language === "en"}
        onChange={() => setLanguage(language === "en" ? "ar" : "en")}
        type="checkbox"
        value=""
        className="peer sr-only"
      />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        English
      </span>
    </label>
  );
};
