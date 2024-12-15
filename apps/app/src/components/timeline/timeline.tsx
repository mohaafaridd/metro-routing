import { useAppContext } from "@/context/app";
import { Phase } from "./phase";

export const Timeline = () => {
  const { path } = useAppContext();

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {path.map((station) => (
        <Phase
          key={station.id}
          station={station}
          nextStation={path[path.indexOf(station) + 1]}
          previousStation={path[path.indexOf(station) - 1]}
        />
      ))}
    </ol>
  );
};
