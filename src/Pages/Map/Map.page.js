import { HeaderDashboard } from "../../Components/HeaderDashboard/HeaderDashboard";
import { Map } from "../../Components/Map/Map";

export default function MapPage() {
  return (
    <div>
      <div>
        <HeaderDashboard />
        <div
          placeholder=" "
          className=" container m-auto flex gap-[20px] text-center h-[400px]"
        >
          <div className="flex-none w-[240px] rounded-[15px] bg-white shadow-lg">
            My account
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}
