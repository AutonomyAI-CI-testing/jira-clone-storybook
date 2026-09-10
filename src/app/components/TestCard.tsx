import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[320px] flex-col gap-4 rounded-md bg-[#1c1c1a] p-5 font-sans"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline size={18} className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed row */}
    <div className="flex items-center gap-2">
      <IoChevronUp size={12} className="text-[#8b9291]" />
      <span className="truncate text-xs font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section */}
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <IoChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <IoInformationCircleOutline size={13} className="text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#929291] bg-[#272822] px-3 py-2">
          <span className="text-xs font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <IoInformationCircleOutline size={13} className="text-[#a3a3a2]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="text-xs font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-1 flex gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-2 text-sm font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
