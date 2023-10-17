import CatWelc from "../../Images/cat-welc.jpg";
export const WelcomePaw = () => {
  return (
    <div className="flex my-[15px] bg-[#F3F3F3] rounded-r-[12px]">
      <img src={CatWelc} alt="Cat" />
      <div className="flex flex-col py-[10px] px-[15px]">
        <h2 className=" text-[27px]  font-[700] text-[#161616]">
          Welcome to your Pawfessional community!
        </h2>
        <p className="text-lg text-[#161616]">
          Our fluffy space for lovers, admirers, dads and moms of our
          four-legged, winged, tailed guys.
        </p>
        <div>
          <a
            href="https://www.pawsome.world"
            className="text-sm  text-[#8A8A8A]"
          >
            https://www.pawsome.world
          </a>
        </div>
      </div>
    </div>
  );
};
