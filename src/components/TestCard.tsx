import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1e1e1e] px-5 py-6 font-sans"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-[#e8e8e8]">UI magician Agent</h1>
        <FiSettings className="text-[#e8e8e8]" size={22} />
      </div>

      {/* Collapsed sub-row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[#a07060]" size={16} />
        <span className="text-sm text-[#a07060]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-[#e8e8e8]" size={18} />
        <h2 className="text-lg font-bold text-[#e8e8e8]">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm font-semibold text-[#d0d0d0]">
          Personal Access Token
        </span>
        <FiInfo className="text-[#d0d0d0]" size={16} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded-sm border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-3 text-sm text-[#c0c0c0] placeholder-[#7a7a7a] outline-none focus:border-[#7a7a7a]"
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm font-semibold text-[#d0d0d0]">Design URL</span>
        <FiInfo className="text-[#d0d0d0]" size={16} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full rounded-sm border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-3 text-sm text-[#c0c0c0] placeholder-[#7a7a7a] outline-none focus:border-[#7a7a7a]"
      />

      {/* Action buttons */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <button className="flex-1 rounded-lg bg-[#b5451b] px-6 py-3 text-sm font-semibold text-[#f0d0c0] hover:bg-[#c54e20] active:bg-[#9e3d18]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#a03d17] px-6 py-3 text-sm font-semibold text-[#e0c0a8] hover:bg-[#b5451b] active:bg-[#8c3514]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-[#e8e8e8]">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
