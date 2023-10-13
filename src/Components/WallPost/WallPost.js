import { AuthorPost } from "../AuthorPost/AuthorPost";
import { ContentPost } from "../ContentPost/ContentPost";
import { DatePost } from "../DatePost/DatePost";

export const WallPost = () => {
  return (
    <div className="rounded-lg">
      <div>
        <p className="flex justify-between">
          <AuthorPost />
        </p>
        <p className=" float-left">
          <DatePost />
        </p>
      </div>
      <div className="bg-white mt-5">
        <ContentPost />
      </div>
    </div>
  );
};
