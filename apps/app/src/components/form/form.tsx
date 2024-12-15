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
        <label className="text-2xl font-bold" htmlFor="starting-station">
          Starting Station
        </label>
        <Select
          id="starting-station"
          options={startingStationsOptions}
          onChange={(option) => setStartingStation(option?.value ?? "")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-2xl font-bold" htmlFor="ending-station">
          Ending Station
        </label>
        <Select
          id="ending-station"
          options={endingStationsOptions}
          onChange={(option) => setEndingStation(option?.value ?? "")}
          isDisabled={!startingStation}
        />
      </div>
    </div>
  );
};
