import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] rounded-md bg-[#0e0c0a] p-5 font-sans"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog size={16} className="text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp size={11} className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-8 flex items-center gap-2">
      <FaChevronUp size={13} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </label>
      <FaInfoCircle size={12} className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
    />

    <div className="mt-4 flex items-center gap-2">
      <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </label>
      <FaInfoCircle size={12} className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
    />

    <div className="mt-4 flex gap-3">
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-8">
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
