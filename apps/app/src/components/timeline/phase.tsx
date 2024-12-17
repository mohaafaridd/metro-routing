import { Station, useAppContext } from "@/context/app";
import { useLanguageContext } from "@/context/language";
import { useMemo } from "react";

interface PhaseProps {
  station: Station;
}

const Tag = ({ station }: { station: Station }) => {
  const { startingStation, endingStation } = useAppContext();
  const { t } = useLanguageContext();
  const isStartingStation = useMemo(
    () => startingStation?.id === station.id,
    [startingStation, station],
  );
  const isEndingStation = useMemo(
    () => endingStation?.id === station.id,
    [endingStation, station],
  );

  if (isStartingStation) {
    return (
      <span className="me-2 ms-3 rounded bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
        {t("starting-station")}
      </span>
    );
  }

  if (isEndingStation) {
    return (
      <span className="me-2 ms-3 rounded bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
        {t("ending-station")}
      </span>
    );
  }

  return null;
};

const Icon = ({ station }: { station: Station }) => {
  const { startingStation, endingStation } = useAppContext();

  if (startingStation?.id === station.id) {
    return (
      <svg
        className="h-6 w-6 text-blue-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (endingStation?.id === station.id) {
    return (
      <svg
        className="h-6 w-6 text-indigo-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (!station.direction) {
    return (
      <svg
        className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    );
  }

  return (
    <svg
      className="h-6 w-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.130 0 0 0 12.68-3.15M6 20v-4h4"
      />
    </svg>
  );
};

const SwitchLine = ({ station }: { station: Station }) => {
  const { startingStation, endingStation } = useAppContext();
  const { t } = useLanguageContext();
  if (!station.direction) return null;

  if (startingStation?.id === station.id) {
    return (
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {t("journey-start", { direction: t(station.direction.direction) })}
      </p>
    );
  }

  if (endingStation?.id === station.id) {
    return null;
  }

  return (
    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
      {t("switch-line", {
        to: t(`line-${station.direction.to}`),
        direction: t(station.direction.direction),
      })}
    </p>
  );
};

const Location = ({ station }: { station: Station }) => {
  return (
    <a
      href={`https://www.google.com/maps/@${station.location.latitude},${station.location.longitude},${15}z`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="me-2 inline-flex items-center rounded border bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 transition-colors duration-150 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800">
        <i className="fa-solid fa-location-dot me-1.5 h-2.5 w-2.5"></i> Location
      </span>
    </a>
  );

  return (
    <a
      href={`https://www.google.com/maps/@${station.location.latitude},${station.location.longitude},${15}z`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="h-4 w-4 text-gray-800 transition-colors duration-300 hover:text-red-500 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
};

export const Phase = ({ station }: PhaseProps) => {
  const { t } = useLanguageContext();

  return (
    <li className="mb-10 ms-6">
      <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
        <Icon station={station} />
      </span>

      <div className="flex items-center gap-2">
        <h3 className="mb-1 ml-2 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
          {t(station.id)}
          <Tag station={station} /> <Location station={station} />
        </h3>
      </div>

      <SwitchLine station={station} />
    </li>
  );
};
