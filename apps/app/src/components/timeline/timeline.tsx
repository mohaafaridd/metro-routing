import { useAppContext } from "@/context/app";
import { Phase } from "./phase";

export const Timeline = () => {
  const { path } = useAppContext();

  if (path.length === 0) return null;

  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {path.map((station) => (
        <Phase key={station.id} station={station} />
      ))}
    </ol>
  );
};
