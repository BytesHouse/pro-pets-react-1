import { LostPetsList } from "../../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { NavArrowLeft, NavArrowRight } from "../icons/NavArrows";
import { useRef } from "react";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";
import InfoIcon from "../icons/InfoIcon";
import { ButtonSecondary } from "../ButtonSecondary/ButtonSecondary";
import { CatInBox } from "../icons/CatInBox";
import CloseBtn from "../CloseBtn/CloseBtn";
import { useState } from "react";

export default function LostPets() {
  const [isShow, hide] = useState(false);
  const slider = useRef(null);

  const settings = {
    centerPadding: "60px",
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-custom-dots",
    adaptiveHeight: true,
    appendDots: (dots) => (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            paddingInline: "5px",
          }}
        >
          <ButtonInfo icon={<InfoIcon />} text="More Info" />
          <ButtonSecondary icon={<CatInBox />} text="I found this pet" />
        </div>
        <div
          className="for-dots"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            className="w-[20px] h-[20px]"
            onClick={() => slider?.current?.slickPrev()}
          >
            <NavArrowLeft />
          </button>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {dots}
          </ul>
          <button
            className="w-[20px] h-[20px]"
            onClick={() => slider?.current?.slickNext()}
          >
            <NavArrowRight />
          </button>
        </div>
      </div>
    ),
  };

  return !isShow ? (
    <div className="relative p-[10px] px-[5px] bg-white rounded-[15px] space-y-[5px]">
      <CloseBtn
        className="z-10 absolute top-[10px] right-[10px]"
        onClick={() => {
          hide(!isShow);
        }}
      />
      <h4 className="text-left px-[5px] text-primaryGold text-[18px]">
        Have you ever see this pet?
      </h4>
      <Slider {...settings} ref={slider}>
        {LostPetsList.map(({ name, gender, age, images }) => {
          return (
            <div className="text-left space-y-[10px]">
              <p className="text-[18px] px-[5px]">
                {name}, {gender}, {age} years old
              </p>
              <div className="flex flex-row justify-around">
                {images.map((path) => (
                  <img
                    className="w-[120px] h-[120px] rounded-[10px]"
                    src={path}
                    alt="lostPet1"
                  />
                  // <p>{path}</p>
                ))}
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <div className="flex flex-row items-center justify-center gap-y-[5px]">
        
      </div> */}
      <div className="for-dots "></div>
    </div>
  ) : (
    ""
  );
}
