import LeftPets from "../../Images/Left-pets.jpg";
import RightPets from "../../Images/right-pets.jpg";
export const ContentPost = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        corporis repellat ad laudantium sapiente, similique dolor, obcaecati
        ducimus autem, ratione voluptates perferendis magnam temporibus numquam!
      </p>
      <div className="flex justify-center py-[15px] gap-[10px]">
        <img src={LeftPets} alt="pet-l" className=" rounded-[10px] " />
        <img src={RightPets} alt="pet-r" className=" rounded-[10px]" />
      </div>
    </div>
  );
};
