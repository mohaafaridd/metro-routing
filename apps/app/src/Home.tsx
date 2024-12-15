import { Form } from "./components/form/form";
import { LanguageSwitch } from "./components/language/language-switch";
import { ThemeSwitch } from "./components/theme/theme-switch";
import { Timeline } from "./components/timeline/timeline";
import { useLanguageContext } from "./context/language";
import "./home.css";
export const Home = () => {
  const { t } = useLanguageContext();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-4 bg-gray-100 p-4 dark:bg-gray-900">
      <div className="toolbar flex items-center justify-center gap-2">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>

      <div className="flex items-center justify-center gap-2">
        <p className="rounded-none text-3xl font-bold text-gray-800 dark:text-white">
          {t("welcome-message")}
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 lg:w-1/4">
        <Form />
        <Timeline />
      </div>
    </div>
  );
};
