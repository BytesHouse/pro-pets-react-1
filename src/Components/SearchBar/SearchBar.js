import MapMarker from "../icons/MapMarker";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useState } from "react";

export default function SearchBar() {
  const [isShow, hide] = useState(false);
  return !isShow ? (
    <div className="top-[25px] left-[25px] absolute z-10 shadow-small w-[400px] h-[44px] p-[10px] bg-white rounded-[15px] flex flex-row gap-x-[10px]">
      <MapMarker />
      <input
        className="grow"
        type="search"
        name=""
        id=""
        placeholder="Geolocation Search..."
      />
      <CloseBtn
        onClick={() => {
          hide(!isShow);
        }}
      />
    </div>
  ) : (
    ""
  );
}
