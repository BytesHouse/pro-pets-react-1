import CloseBtn from "../CloseBtn/CloseBtn";
import GreenBtn from "../GreenBtn/GreenBtn";
import LostPets from "../LostPets/LostPets";
import MapMarker from "../icons/MapMarker";

export const Map = ({ size = "big" }) => {
  return size === "big" ? (
    <div className="relative w-full rounded-[15px] border-none overflow-clip min-h-[790px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2755890500644!2d37.61730957713332!3d55.753714691920656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2s!4v1697276513183!5m2!1sru!2s"
        title="Google Map"
        className="w-full h-full rounded-[15px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* search bar */}
      <div className="absolute z-10 shadow-small top-[25px] left-[25px] w-[400px] h-[44px] p-[10px] bg-white rounded-[15px] flex flex-row gap-x-[10px]">
        <MapMarker />
        <input
          className="grow"
          type="search"
          name=""
          id=""
          placeholder="Geolocation Search..."
        />
        <CloseBtn />
      </div>
      <GreenBtn isPage={false} />
      {/* menu left-bottom */}
      <div className="absolute z-10 bottom-[25px] left-[25px] w-max h-max flex flex-col gap-y-[10px]">
        <LostPets />
      </div>
    </div>
  ) : (
    <div className="relative w-[330px] rounded-[10px] border-none overflow-clip h-[330px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2755890500644!2d37.61730957713332!3d55.753714691920656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5759f5b76b%3A0xde502cd817a1b053!2z0JzQsNCy0LfQvtC70LXQuSDQki7QmC4g0JvQtdC90LjQvdCwINC90LAg0JrRgNCw0YHQvdC-0Lkg0L_Qu9C-0YnQsNC00Lg!5e0!3m2!1sru!2s!4v1697276513183!5m2!1sru!2s"
        title="Google Map"
        className="w-full h-full rounded-[10px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <GreenBtn />
    </div>
  );
};
