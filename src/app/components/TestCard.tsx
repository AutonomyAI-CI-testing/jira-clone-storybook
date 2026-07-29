import { IoSettingsOutline, IoChevronUpOutline, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-72 min-h-[600px] rounded-xl p-5"
      style={{ backgroundColor: "#2b2b2b", color: "#e8e0d8" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">UI magician Agent</span>
        <IoSettingsOutline size={22} style={{ color: "#a09888" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-8" style={{ color: "#b87a50" }}>
        <IoChevronUpOutline size={14} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <IoChevronUpOutline size={16} style={{ color: "#e8e0d8" }} />
          <span className="text-lg font-semibold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm" style={{ color: "#c8c0b8" }}>Personal Access Token</span>
            <IoInformationCircleOutline size={16} style={{ color: "#a09888" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full px-3 py-2 rounded text-sm outline-none"
            style={{
              backgroundColor: "#3a3530",
              border: "1px solid #5a5048",
              color: "#a09888",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm" style={{ color: "#c8c0b8" }}>Design URL</span>
            <IoInformationCircleOutline size={16} style={{ color: "#a09888" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full px-3 py-2 rounded text-sm outline-none"
            style={{
              backgroundColor: "#3a3530",
              border: "1px solid #5a5048",
              color: "#a09888",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-3 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: "#b85c2c", color: "#f0e8e0" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: "#b85c2c", color: "#f0e8e0" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-auto pt-4">
        <span className="text-lg font-semibold">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
