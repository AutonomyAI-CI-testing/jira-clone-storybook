import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}
      className="w-full max-w-sm p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <FiSettings size={22} color="#ffffff" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-1">
        <FiChevronUp size={16} color="#c97d50" />
        <span style={{ color: "#c97d50" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacer */}
      <div className="my-8" />

      {/* Section header */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={18} color="#ffffff" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-white">Personal Access Token</span>
        <FiInfo size={16} color="#aaaaaa" />
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          backgroundColor: "#2a2a2a",
          borderColor: "#555555",
          color: "#cccccc",
        }}
        className="w-full rounded border px-3 py-2 text-sm mb-4 placeholder:text-gray-500 outline-none"
      />

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-white">Design URL</span>
        <FiInfo size={16} color="#aaaaaa" />
      </div>

      {/* Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          backgroundColor: "#2a2a2a",
          borderColor: "#555555",
          color: "#cccccc",
        }}
        className="w-full rounded border px-3 py-2 text-sm mb-6 placeholder:text-gray-500 outline-none"
      />

      {/* Button row */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          type="button"
          style={{ backgroundColor: "#b5541c" }}
          className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b5541c" }}
          className="flex-1 rounded-lg px-6 py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
