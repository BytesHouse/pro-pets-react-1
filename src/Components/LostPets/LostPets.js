import { LostPetsList } from "../../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { NavArrowLeft, NavArrowRight } from "../icons/NavArrows";
import { useRef } from "react";

export default function LostPets() {
  const slider = useRef(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-custom-dots",
  };

  return (
    <div className="p-[10px] w-[400px] bg-white rounded-[15px]">
      <h4>Have you ever see this pet?</h4>
      <Slider {...settings} ref={slider}>
        {LostPetsList.map(({ name, gender, age, images }) => {
          return (
            <div>
              <p className="text-[18px]">
                {name}, {gender}, {age} years old
              </p>
              <div className="flex flex-row gap-x-[10px] justify-around">
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
      <div class="slick-custom-dots">
        <button
          className="absolute top-[-15px] left-[125px] w-[20px] h-[20px]"
          onClick={() => slider?.current?.slickPrev()}
        >
          <NavArrowLeft />
        </button>
        <button
          className="absolute top-[-15px] right-[125px] w-[20px] h-[20px]"
          onClick={() => slider?.current?.slickNext()}
        >
          <NavArrowRight />
        </button>
      </div>
    </div>
  );
}
