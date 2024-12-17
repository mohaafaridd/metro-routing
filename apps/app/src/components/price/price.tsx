import { useAppContext } from "@/context/app";
import { useLanguageContext } from "@/context/language";
import { useMemo } from "react";

export const Price = () => {
  const { path } = useAppContext();
  const { language, t } = useLanguageContext();

  const price = useMemo(() => {
    if (path.length > 23) return 20;
    if (path.length > 16) return 12;
    if (path.length > 9) return 10;
    if (path.length > 1) return 8;
    return 0;
  }, [path]);

  const locale = useMemo(() => {
    if (language === "ar") return "ar-EG";
    return "en-US";
  }, [language]);

  const priceText = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "EGP",
    }).format(price);
  }, [price, locale]);

  const stationCount = useMemo(() => {
    return new Intl.NumberFormat(locale).format(path.length);
  }, [path.length, locale]);

  if (path.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-200 p-2 text-center text-xl font-bold text-gray-800 dark:bg-gray-800 dark:text-white">
      {priceText} - {stationCount} {t("station")}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t(`ticket-${price}`)}
      </p>
    </div>
  );
};
