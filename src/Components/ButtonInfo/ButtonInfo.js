import { useTranslation } from "react-i18next";
export const ButtonInfo = ({ icon, text }) => {
  const { t } = useTranslation();
  return (
    <button className="bg-none py-[12px] border border-[#FF855F] px-[15px] rounded-[10px] text-[#FF855F] flex flex-auto w-1/2 items-center justify-center gap-[10px] whitespace-nowrap">
      {icon}
      {t(text)}
    </button>
  );
};
