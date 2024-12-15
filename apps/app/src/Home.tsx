import { Form } from "./components/form/form";
import { LanguageSwitch } from "./components/language/language-switch";
import { ThemeSwitch } from "./components/theme/theme-switch";
import { useAppContext } from "./context/app";
import { useLanguageContext } from "./context/language";

export const Home = () => {
  const { path } = useAppContext();
  const { t } = useLanguageContext();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900">
      <p className="rounded-none text-3xl font-bold underline">Hello World</p>

      <LanguageSwitch />

      <ThemeSwitch />

      <Form />

      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Path {path.length}</p>
        <div className="flex flex-col gap-2">
          {path.map((station) => (
            <p key={station.id}>{t(station.id)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
