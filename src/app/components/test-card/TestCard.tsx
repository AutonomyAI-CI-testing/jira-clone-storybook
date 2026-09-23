import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-64 rounded bg-black p-5 font-sans text-[13.5px] font-semibold text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <FiSettings className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      {/* Collapsible-looking info row */}
      <div className="mt-4 flex items-center gap-1 text-[11.5px] font-semibold text-[#8b9291]">
        <FiChevronUp className="h-3 w-3" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-1 text-[13.5px] font-semibold text-[#b2b2b1]">
        <FiChevronUp className="h-3 w-3" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1 text-[11.5px] font-semibold text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <FiInfo className="h-3 w-3" />
        </div>
        <input
          disabled
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <div className="mb-1 flex items-center gap-1 text-[11.5px] font-semibold text-[#a3a3a2]">
          <span>Design URL</span>
          <FiInfo className="h-3 w-3" />
        </div>
        <input
          disabled
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#a5adad] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex gap-3">
        <button
          disabled
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          disabled
          className="flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer section label */}
      <div className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
