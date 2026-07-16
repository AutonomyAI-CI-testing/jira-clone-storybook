import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2b2b2b] min-h-screen w-full max-w-sm mx-auto p-5 flex flex-col gap-6"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-xl">UI magician Agent</span>
        <FiSettings className="text-white" size={22} />
      </div>

      {/* 2. Subrow: chevron + muted amber text */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#a0785a]" size={16} />
        <span className="text-[#a0785a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Section heading: chevron + bold white text */}
      <div className="flex items-center gap-3 mt-4">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* 4. Personal Access Token label + input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">
            Personal Access Token
          </span>
          <FiInfo className="text-white opacity-70" size={15} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded text-[#888] placeholder:text-[#888] px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      {/* 5. Design URL label + input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">Design URL</span>
          <FiInfo className="text-white opacity-70" size={15} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#3a3a3a] border border-[#555] rounded text-[#888] placeholder:text-[#888] px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      {/* 6. Two orange buttons side by side */}
      <div className="flex items-center gap-4 justify-center">
        <button
          type="button"
          className="bg-[#c1632f] text-white font-semibold rounded-xl px-8 py-3 hover:bg-[#a8542a] active:bg-[#8f4623] transition-colors duration-150"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#c1632f] text-white font-semibold rounded-xl px-8 py-3 hover:bg-[#a8542a] active:bg-[#8f4623] transition-colors duration-150"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns heading */}
      <div className="mt-4">
        <span className="text-white font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
};
