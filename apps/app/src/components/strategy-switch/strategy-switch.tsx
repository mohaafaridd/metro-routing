import { useAppContext } from "@/context/app";
import { Strategy } from "@/context/app/app.context";
import { useLanguageContext } from "@/context/language";

export const StrategySwitch = () => {
  const { strategy, setStrategy, path } = useAppContext();
  const { t } = useLanguageContext();

  if (path.length === 0) return null;

  return (
    <div className="inline-flex w-full rounded-md" role="group">
      <button
        disabled={strategy === Strategy.SHORTEST}
        onClick={() => setStrategy(Strategy.SHORTEST)}
        type="button"
        className="inline-flex grow items-center justify-around rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400"
      >
        <i className="fa-solid fa-dollar-sign hidden h-3 w-3 text-gray-800 lg:block dark:text-white"></i>
        {t("shortest")}
      </button>

      <button
        disabled={strategy === Strategy.LEAST_SWITCHING}
        onClick={() => setStrategy(Strategy.LEAST_SWITCHING)}
        type="button"
        className="inline-flex grow items-center justify-around rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400"
      >
        <i className="fa-solid fa-couch hidden h-3 w-3 text-gray-800 lg:block dark:text-white"></i>
        {t("least-switching")}
      </button>
    </div>
  );
};
