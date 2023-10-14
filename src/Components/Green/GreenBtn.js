import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const GreenBtn = ({ isPage = true }) => {
  const [isMapOpened, mapChange] = useState(isPage);
  const navigate = useNavigate();
  return isMapOpened ? (
    <button
      onClick={() => {
        mapChange(!isMapOpened);
        // console.log(isMapOpened);
      }}
      className="green-btn"
    >
      <Link to="/map">
        <svg width={24} height={24} fill="none">
          <path
            d="M11.438 18.75L4.688 12l6.75-6.75M5.625 12h13.688"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </button>
  ) : (
    <button
      onClick={() => {
        mapChange(!isMapOpened);
        console.log(isMapOpened);
        navigate(-1);
      }}
      className="green-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M13.2656 13.2656L26.7343 26.7343"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.7344 13.2656L13.2657 26.7343"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default GreenBtn;
