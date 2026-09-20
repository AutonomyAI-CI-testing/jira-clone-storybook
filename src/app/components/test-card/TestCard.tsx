import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[260px] bg-[#1a1712] p-4 font-sans">
    <div className="flex items-center justify-between">
      <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <FiSettings className="text-[#b5b5b5]" size={18} />
    </div>

    <div className="mt-2 flex items-center gap-2">
      <FiChevronUp size={12} className="text-[#8b9291]" />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-16" />

    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp size={14} className="text-[#b2b2b1]" />
      <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-1">
        <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </label>
        <FiInfo size={12} className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        disabled
        className="mt-1 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-1">
        <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </label>
        <FiInfo size={12} className="text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        disabled
        className="mt-1 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-6 flex gap-3">
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-10 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
