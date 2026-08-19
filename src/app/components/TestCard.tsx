import {
  IoSettingsOutline,
  IoChevronUp,
  IoChevronDown,
  IoInformationCircleOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1a] px-5 py-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Section 1: Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Section 2: Subtitle row */}
      <div className="mt-4 flex items-center gap-2">
        <IoChevronUp className="shrink-0 text-[#8b9291]" size={10} />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 3: Add New Design */}
      <div className="mt-[77px]">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <IoChevronDown className="shrink-0 text-[#b2b2b1]" size={13} />
          <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-[44px] flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <IoInformationCircleOutline
            className="shrink-0 text-[#a4a4a3]"
            size={15}
          />
        </div>
        <div className="mt-3 border border-[#a5adad] bg-[#272822] px-3 py-[9px]">
          <span className="text-[11.5px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="mt-[11px] flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <IoInformationCircleOutline
            className="shrink-0 text-[#a3a3a2]"
            size={15}
          />
        </div>
        <div className="mt-3 border-2 border-[#929291] bg-[#272822] px-3 py-[9px]">
          <span className="text-[11.5px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex gap-[13px]">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Section 4: Recent Breakdowns */}
      <div className="mt-[46px]">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
