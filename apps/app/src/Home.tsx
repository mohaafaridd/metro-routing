import { Credits } from "./components/credits/credits";
import { EmptyPath } from "./components/empty-path/empty-path";
import { Form } from "./components/form/form";
import { LanguageSwitch } from "./components/language/language-switch";
import { Price } from "./components/price/price";
import { StrategySwitch } from "./components/strategy-switch/strategy-switch";
import { ThemeSwitch } from "./components/theme/theme-switch";
import { Timeline } from "./components/timeline/timeline";
import { useLanguageContext } from "./context/language";
import "./home.css";
export const Home = () => {
  const { t } = useLanguageContext();

  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-9 bg-gray-100 p-4 dark:bg-gray-900">
      <div className="toolbar flex items-center justify-center gap-2">
        <ThemeSwitch />
        <LanguageSwitch />
      </div>

      <p className="rounded-none text-3xl font-bold text-gray-800 dark:text-white">
        {t("welcome-message")}
      </p>

      <div className="flex w-full grow flex-col gap-9 lg:w-1/4">
        <Form />
        <StrategySwitch />
        <Price />
        <Timeline />
        <EmptyPath />
      </div>

      <Credits />
    </div>
  );
};
