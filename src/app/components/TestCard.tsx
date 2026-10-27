import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary-bold text-2xs"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="text-xs text-[#b5b5b5]">UI magician Agent</span>
      <HiOutlineCog
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    {/* Collapse row */}
    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="truncate text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[75px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-xs text-[#b2b2b1]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-2">
      <span className="text-[#a4a4a3]">Personal Access Token</span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <div className="mt-[11px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-3">
      <span className="font-primary text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2">
      <span className="text-[#a3a3a2]">Design URL</span>
      <HiOutlineInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>
    <div className="mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-3">
      <span className="font-primary text-[#71726e]">
        https://www.figma.com/file/
      </span>
    </div>

    {/* Button row */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[#8c8078]">
        Awesome
      </span>
      <span className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[#8c8078]">
        Prepare
      </span>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-[47px] text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
