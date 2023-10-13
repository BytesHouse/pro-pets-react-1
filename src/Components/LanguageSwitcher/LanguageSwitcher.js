import { Arrow } from "../icons/Arrow";

export const LanguageSwitcher = () => {
  return (
    <div className=" relative">
      <div className="bg-white p-5 raunded-t flex justify-between items-center ">
        RU <Arrow />{" "}
      </div>
      <ul className="absolute w-full">
        <li className="bg-[#f1f1f2] hover:bg-[#ff6321] p-[5px] hover:text-white">
          EN
        </li>
        <li>RO</li>
        <li>UA</li>
      </ul>
    </div>
  );
};
