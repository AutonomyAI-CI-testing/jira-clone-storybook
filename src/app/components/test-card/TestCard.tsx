import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-[#141210] p-4 font-sans text-sm"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
    </div>

    {/* Collapsible info row */}
    <div className="mt-3 flex items-center gap-2">
      <FiChevronUp className="h-3 w-3 text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a single...
      </span>
    </div>

    {/* Spacer to mimic empty middle area */}
    <div className="h-16" />

    {/* Add New Design section */}
    <div className="flex items-center gap-2">
      <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-3 w-3 text-[#a4a4a3]" />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-3 w-3 text-[#a3a3a2]" />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
      />
    </div>

    <div className="mt-4 flex gap-3">
      <button
        type="button"
        className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-6 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
