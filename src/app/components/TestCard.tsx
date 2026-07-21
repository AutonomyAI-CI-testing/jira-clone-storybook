import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen flex-col bg-[#2a2a2a] p-5 text-white"
    >
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <span className="font-primary-bold text-lg text-white">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b0b0b0]" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#c1714a]" size={16} />
        <span className="font-primary-light text-sm text-[#c1714a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* Add New Design section header */}
      <div className="mb-5 flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <span className="font-primary-bold text-lg text-white">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2 flex items-center gap-2">
        <span className="font-primary text-sm text-white">
          Personal Access Token
        </span>
        <FiInfo className="text-[#b0b0b0]" size={16} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 w-full rounded border border-[#555] bg-transparent px-3 py-3 text-sm text-[#888] placeholder-[#888] outline-none"
      />

      {/* Design URL */}
      <div className="mb-2 flex items-center gap-2">
        <span className="font-primary text-sm text-white">Design URL</span>
        <FiInfo className="text-[#b0b0b0]" size={16} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-6 w-full rounded border border-[#888] bg-transparent px-3 py-3 text-sm text-[#888] placeholder-[#888] outline-none"
      />

      {/* Buttons */}
      <div className="mb-10 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1622f] py-3 font-primary-bold text-sm text-white hover:bg-[#a8501f] active:bg-[#8f4018]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1622f] py-3 font-primary-bold text-sm text-white hover:bg-[#a8501f] active:bg-[#8f4018]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="font-primary-bold text-lg text-white">
        Recent Breakdowns
      </span>
    </div>
  );
};
