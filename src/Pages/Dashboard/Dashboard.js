import { HeaderDashboard } from "../../Components/HeaderDashboard/HeaderDashboard";
import { Wall } from "../../Components/Wall/Wall";

export const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard />
      <div
        placeholder=" "
        className=" container m-auto flex gap-[20px]  h-auto"
      >
        <div className="flex-none w-[240px] rounded-[15px] bg-white shadow-lg">
          My account
        </div>
        <div className="flex w-[590px] p-[10px]  rounded-[15px] bg-white shadow-lg">
          <Wall />
        </div>
        <div className=" hidden lg:block flex-none w-[330px] rounded-[15px] bg-white shadow-lg">
          Commerce
        </div>
      </div>
    </div>
  );
};
