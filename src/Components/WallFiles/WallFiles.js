import { ZipDownload } from "../ZipDownload/ZipDownload";
import { Zip } from "../icons/Zip";

export const WallFiles = () => {
  return (
    <div className="flex bg-[#F3F3F3] rounded-[10px]">
      <div className="pl-[10px] pt-[10px]">
        <Zip />
      </div>
      <div className="pt-[10px] ml-[8px]">
        <p className="text-sm font-semibold ">TestingFile.Docx</p>
        <p className="text-sm text-[#8A8A8A]">6.5 MB</p>
      </div>
      <div className="ml-auto pr-[10px] py-[12px]">
        <a href="путь-к-файду.zip" download>
          <ZipDownload />
        </a>
      </div>
    </div>
  );
};
