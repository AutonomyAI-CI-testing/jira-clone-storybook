import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded bg-[#1c1d17] p-4 font-primary text-sm"
    >
      {/* top accent strip */}
      <div className="-mx-4 -mt-4 mb-4 h-2 bg-[#272822]" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-sm text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FaCog className="text-[#8b9291]" />
      </div>

      {/* Collapsible row */}
      <div className="mt-3 flex items-center gap-2 text-[#8b9291]">
        <FaChevronUp size={10} />
        <span className="text-xs">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8">
        <div className="mb-3 flex items-center gap-2 text-[#b2b2b1]">
          <FaChevronUp size={10} />
          <span className="font-primary-bold text-sm">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-1 flex items-center gap-1 text-xs text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <FaInfoCircle size={12} />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-4 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 py-2 text-xs text-[#737470] placeholder-[#737470]"
        />

        {/* Design URL field */}
        <div className="mb-1 flex items-center gap-1 text-xs text-[#a3a3a2]">
          <span>Design URL</span>
          <FaInfoCircle size={12} />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mb-4 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 py-2 text-xs text-[#71726e] placeholder-[#71726e]"
        />

        {/* Buttons */}
        <div className="mt-2 flex gap-3">
          <button className="rounded bg-[#843a17] px-6 py-2 text-xs text-[#8c8078]">
            Awesome
          </button>
          <button className="rounded bg-[#843a17] px-6 py-2 text-xs text-[#8c8078]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8 font-primary-bold text-sm text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
