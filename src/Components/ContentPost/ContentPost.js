import LeftPets from "../../Images/Left-pets.jpg";
import RightPets from "../../Images/right-pets.jpg";
export const ContentPost = () => {
  return (
    <div>
      <p className=" text-sm text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        corporis repellat ad laudantium sapiente, similique dolor, obcaecati
        ducimus autem, ratione voluptates perferendis magnam temporibus numquam!
      </p>
      <div className="flex gap-[10px] py-[15px]">
        <img src={LeftPets} alt="pet-l" className="rounded-[10px]" />
        <img src={RightPets} alt="pet-r" className="rounded-[10px]" />
      </div>
    </div>
  );
};
