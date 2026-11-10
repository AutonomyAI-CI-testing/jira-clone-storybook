import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { TbChevronUp } from "react-icons/tb";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]";

const COLLAPSED_TITLE = "From entire frame to a singl...";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1c1c1c] px-5 py-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-4">
        <TbChevronUp size={12} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          {COLLAPSED_TITLE}
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <TbChevronUp size={14} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-8">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>

      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-6">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>

      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-12 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};
