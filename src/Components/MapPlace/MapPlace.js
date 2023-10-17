import img1 from "../../Images/Frame 677.png";
import img2 from "../../Images/Frame 678.png";
import img3 from "../../Images/Frame 679.png";
import RateStar from "../icons/RateStar";
import { useState } from "react";
import CloseBtn from "../CloseBtn/CloseBtn";

export default function MapPlace() {
  const [isShow, hide] = useState(false);
  return !isShow ? (
    <div className="relative p-[10px] bg-white rounded-[15px] space-y-[5px]">
      <CloseBtn
        className="z-10 absolute top-[10px] right-[10px]"
        onClick={() => {
          hide(!isShow);
        }}
      />
      <h4 className="text-left px-[5px] text-primaryGold text-[18px]">
        Petstore №1
      </h4>
      <div className="flex justify-center gap-x-[10px]">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="flex flex-row justify-start gap-x-[5px]">
        <RateStar />
        <RateStar />
        <RateStar />
        <RateStar type="half" />
        <RateStar type="zero" />
      </div>
      <div>
        <p className="text-left flex flex-row">
          Adress:&nbsp;
          <address>Strada Grigore Ureche 14, of.58, Chişinău</address>
        </p>
        <p className="text-left">Working hours: Mon-Fri, 9:00 - 18:00</p>
        <p className="text-left">
          Phone number: <a href="tel:+022xxxxxx">022-xx-xx-xx</a>
        </p>
      </div>
    </div>
  ) : (
    ""
  );
}
