import {
  IoSettingsOutline,
  IoChevronUpOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded bg-[#161a1d] p-5 font-primary text-sm"
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
    </div>

    {/* Collapsible subtitle row */}
    <div className="mt-4 flex items-center gap-2">
      <IoChevronUpOutline className="text-[#8b9291]" size={14} />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section header */}
    <div className="mt-10 flex items-center gap-2">
      <IoChevronUpOutline className="text-[#b2b2b1]" size={14} />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-4">
      <div className="flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline className="text-[#a4a4a3]" size={12} />
      </div>
      <div className="mt-1 rounded border border-[#929291] bg-[#272822] px-3 py-2.5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    {/* Design URL field */}
    <div className="mt-3">
      <div className="flex items-center gap-1">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline className="text-[#a3a3a2]" size={12} />
      </div>
      <div className="mt-1 rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-4 flex gap-3">
      <button className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </button>
      <button className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns section */}
    <div className="mt-10">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
