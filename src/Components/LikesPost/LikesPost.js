import { Like } from "../icons/Like";
import { Repost } from "../icons/Repost";
import { Comment } from "../icons/Comment";

export const LikesPost = () => {
  return (
    <div className="flex pt-[10px] items-center gap-[16px] ">
      <div>
        <button className="flex gap-1 bg-[#FF7171] w-[74px] h-[28px] text-sm rounded-[90px] items-center justify-center ">
          <Like />
          <p className="text-[#FFFFFF]">1200</p>
        </button>
      </div>
      <div>
        <button className="flex gap-1 bg-[#F3F3F3] text-[#8A8A8A] w-[66px] h-[28px] rounded-[90px] text-sm items-center justify-center">
          <Comment />
          <p>554</p>
        </button>
      </div>
      <div>
        <button className="flex gap-1 bg-[#F3F3F3] text-[#8A8A8A] w-[57px] h-[28px] rounded-[90px] text-sm items-center justify-center">
          <Repost />
          <p>98</p>
        </button>
      </div>
      <div>
        <div className="flex items-center">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <div className="text-sm text-[#8A8A8A] pl-2">
            <p>Jasey, Petra and 6 friends Like this post</p>
          </div>
        </div>
      </div>
    </div>
  );
};
