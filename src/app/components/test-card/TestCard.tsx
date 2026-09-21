import gearIcon from "./assets/Image_3.svg";
import chevronCollapsedIcon from "./assets/Image_2.svg";
import chevronExpandedIcon from "./assets/Image_4.svg";
import infoIcon from "./assets/Image.svg";
import infoIconAlt from "./assets/Image_5.svg";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#1c1d17] p-5 font-['Inter',sans-serif] text-sm"
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <img src={gearIcon} alt="Settings" className="h-4 w-3.5" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <img src={chevronCollapsedIcon} alt="" className="h-[5px] w-2" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <img src={chevronExpandedIcon} alt="" className="h-2 w-3" />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <img src={infoIcon} alt="" className="h-3.5 w-3.5" />
          </div>
          <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
            <span className="text-[11.5px] font-semibold text-[#737470]">
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <img src={infoIconAlt} alt="" className="h-3.5 w-3.5" />
          </div>
          <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
            <span className="text-[10.5px] font-semibold text-[#71726e]">
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="mt-8">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
