import AutorImg from "../../Images/Autor.png";
import { Dots } from "../icons/Dots";
export const AuthorPost = () => {
  return (
    <div className="flex ">
      <div className="flex  gap-[10px]">
        <img src={AutorImg} alt="autor" className="  w-10 h-10" />
        <div className="flex flex-col  ">
          <p className="text-lg">Dorothy Kovalsky Parker</p>
          <p className="text-sm text-[#8A8A8A]">26.08.2077, 19.28</p>
        </div>
      </div>
      <div className="ml-auto w-6 h-6 pt-[7.5px]">
        <button>
          <Dots />
        </button>
      </div>
    </div>
  );
};
