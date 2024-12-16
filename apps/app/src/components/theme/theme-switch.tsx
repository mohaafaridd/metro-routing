import { useThemeContext } from "@/context/theme";
import clsx from "clsx";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        disabled={theme === "light"}
        onClick={() => toggleTheme()}
        className={clsx(
          "inline-flex items-center rounded-s-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400",
        )}
      >
        <svg
          className="me-2 h-3 w-3 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
            clipRule="evenodd"
          />
        </svg>
        Light
      </button>

      <button
        onClick={() => toggleTheme()}
        disabled={theme === "dark"}
        type="button"
        className="inline-flex items-center rounded-e-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-gray-400 disabled:focus:text-gray-400 disabled:focus:ring-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white dark:focus:ring-blue-500 disabled:dark:bg-gray-700 disabled:dark:text-gray-400 disabled:dark:hover:bg-gray-700 disabled:dark:hover:text-gray-400 disabled:dark:focus:text-gray-400 disabled:dark:focus:ring-gray-400"
      >
        <svg
          className="me-2 h-3 w-3 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
            clipRule="evenodd"
          />
        </svg>
        Dark
      </button>
    </div>
  );
};
