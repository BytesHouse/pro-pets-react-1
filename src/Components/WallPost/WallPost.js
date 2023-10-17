import { WallFiles } from "../WallFiles/WallFiles";
import { AuthorPost } from "../AuthorPost/AuthorPost";
import { ContentPost } from "../ContentPost/ContentPost";
import { LikesPost } from "../LikesPost/LikesPost";
import { WelcomePaw } from "../WelcomePaw/WelcomePaw";

export const WallPost = () => {
  return (
    <div className="rounded-lg">
      <div>
        <AuthorPost />
      </div>
      <div className="bg-white mt-5">
        <ContentPost />
      </div>
      <div>
        <WallFiles />
      </div>
      <div>
        <WelcomePaw />
      </div>
      <div>
        <LikesPost />
      </div>
    </div>
  );
};
