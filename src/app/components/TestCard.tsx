import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="font-sans min-h-screen w-[254px] bg-[#1e1e1e] p-5"
  >
    {/* Header row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings className="text-[#b5b5b5]" size={16} />
    </div>

    {/* Subtitle row */}
    <div className="mt-3 flex items-center gap-2">
      <FiChevronUp className="shrink-0 text-[#8b9291]" size={14} />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp className="shrink-0 text-[#b2b2b1]" size={14} />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-5">
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="text-[#a4a4a3]" size={13} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:font-semibold placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL field */}
    <div className="mt-4">
      <div className="mb-1.5 flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="text-[#a3a3a2]" size={13} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:font-semibold placeholder:text-[#737470]"
      />
    </div>

    {/* Button row */}
    <div className="mt-6 flex justify-center gap-3">
      <button className="rounded-lg bg-[#843a17] px-8 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </button>
      <button className="rounded-lg bg-[#843a17] px-8 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div className="mt-16">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
