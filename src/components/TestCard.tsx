import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", color: "#ffffff" }}
      className="min-h-screen w-full max-w-sm p-5 font-sans"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings size={22} style={{ color: "#c0c0c0" }} />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: "#b07050" }} />
        <span className="text-sm" style={{ color: "#b07050" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp size={18} style={{ color: "#ffffff" }} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-sm font-medium"
            style={{ color: "#e0e0e0" }}
            htmlFor="pat-input"
          >
            Personal Access Token
          </label>
          <FiInfo size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#e0e0e0",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6 mt-4">
        <div className="mb-2 flex items-center gap-2">
          <label
            className="text-sm font-medium"
            style={{ color: "#e0e0e0" }}
            htmlFor="url-input"
          >
            Design URL
          </label>
          <FiInfo size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            color: "#e0e0e0",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="mb-10 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#a0522d" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg px-4 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#a0522d" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
