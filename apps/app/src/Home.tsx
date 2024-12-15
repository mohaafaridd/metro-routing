import { Form } from "./components/form/form";
import { LanguageSwitch } from "./components/language/language-switch";
import { ThemeSwitch } from "./components/theme/theme-switch";

export const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-gray-100 dark:bg-gray-900">
      <p className="rounded-none text-3xl font-bold underline">Hello World</p>

      <LanguageSwitch />

      <ThemeSwitch />

      <Form />
    </div>
  );
};
