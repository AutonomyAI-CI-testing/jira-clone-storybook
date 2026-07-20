import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1c1c1c] p-6 font-sans"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings size={22} className="text-white opacity-80" />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp size={16} className="text-[#c87941]" />
        <span className="text-sm text-[#c87941]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp size={18} className="text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-semibold text-white">
          Personal Access Token
        </span>
        <FiInfo size={15} className="text-white opacity-60" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 w-full rounded border border-[#555] bg-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-[#888] outline-none"
      />

      {/* Design URL */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-semibold text-white">Design URL</span>
        <FiInfo size={15} className="text-white opacity-60" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-6 w-full rounded border border-[#777] bg-[#2a2a2a] px-4 py-3 text-sm text-white placeholder-[#888] outline-none"
      />

      {/* Action buttons */}
      <div className="mb-10 flex items-center justify-center gap-4">
        <button
          type="button"
          className="rounded-lg bg-[#a0522d] px-8 py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#a0522d] px-8 py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
