import { useAppContext } from "@/context/app";
import { useLanguageContext } from "@/context/language/use-language-context";
import { useMemo } from "react";
import Select from "react-select";

export const Form = () => {
  const { language, t } = useLanguageContext();
  const {
    stations,
    startingStation,
    endingStation,
    setStartingStation,
    setEndingStation,
  } = useAppContext();

  const startingStationsOptions = useMemo(() => {
    return stations
      .filter((station) => station.id !== endingStation?.id)
      .map((station) => ({
        value: station.id,
        label: t(station.id),
      }));
  }, [endingStation, language]);

  const endingStationsOptions = useMemo(() => {
    return stations
      .filter((station) => station.id !== startingStation?.id)
      .map((station) => ({
        value: station.id,
        label: t(station.id),
      }));
  }, [startingStation, language]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-gray-800 dark:text-white"
          htmlFor="starting-station"
        >
          {t("starting-station")}
        </label>
        <Select
          id="starting-station"
          options={startingStationsOptions}
          onChange={(option) => setStartingStation(option?.value ?? "")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          className="font-bold text-gray-800 dark:text-white"
          htmlFor="ending-station"
        >
          {t("ending-station")}
        </label>
        <Select
          id="ending-station"
          options={endingStationsOptions}
          onChange={(option) => setEndingStation(option?.value ?? "")}
          isDisabled={!startingStation}
        />
      </div>

      <button
        className="flex items-center justify-center gap-2 rounded-md bg-blue-500 p-2 text-white transition-colors duration-300 hover:bg-blue-600"
        onClick={() => {
          setStartingStation(endingStation?.id ?? "");
          setEndingStation(startingStation?.id ?? "");
        }}
      >
        <span>Switch</span>

        <svg
          className="h-4 w-4 text-white"
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
            d="M8 20V7m0 13-4-4m4 4 4-4m4-12v13m0-13 4 4m-4-4-4 4"
          />
        </svg>
      </button>
    </div>
  );
};
