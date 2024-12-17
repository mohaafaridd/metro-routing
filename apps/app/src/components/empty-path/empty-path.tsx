import { useAppContext } from "@/context/app";
import { useLanguageContext } from "@/context/language";

export const EmptyPath = () => {
  const { path } = useAppContext();
  const { t } = useLanguageContext();

  if (path.length > 0) {
    return null;
  }

  return (
    <div className="flex w-full grow flex-col gap-9 rounded-lg bg-gray-200 p-4 text-center text-xl font-bold text-gray-800 dark:bg-gray-800 dark:text-white">
      <p className="m-auto rounded-none text-3xl font-bold text-gray-500 dark:text-gray-400">
        {t("empty-path")}
      </p>
    </div>
  );
};
