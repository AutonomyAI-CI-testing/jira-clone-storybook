import { IoSettingsOutline, IoInformationCircleOutline, IoChevronUpOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#252525", color: "#ffffff", minHeight: "100vh" }}
      className="flex flex-col px-5 py-6 w-full max-w-sm"
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-2xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={26} color="#cccccc" />
      </div>

      {/* Collapsed Section Row */}
      <div className="flex items-center gap-2 mb-10">
        <IoChevronUpOutline size={16} color="#cccccc" />
        <span style={{ color: "#b8874f" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-5">
        <IoChevronUpOutline size={18} color="#cccccc" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-gray-300">Personal Access Token</span>
        <IoInformationCircleOutline size={18} color="#aaaaaa" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          backgroundColor: "#2e2e2e",
          borderColor: "#555555",
          color: "#999999",
        }}
        className="border rounded px-3 py-3 text-sm w-full mb-4 outline-none"
        readOnly
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm text-gray-300">Design URL</span>
        <IoInformationCircleOutline size={18} color="#aaaaaa" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{
          backgroundColor: "#2e2e2e",
          borderColor: "#555555",
          color: "#999999",
        }}
        className="border rounded px-3 py-3 text-sm w-full mb-6 outline-none"
        readOnly
      />

      {/* Action Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          style={{ backgroundColor: "#c0622a" }}
          className="flex-1 py-4 rounded-lg text-white font-bold text-base"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#c0622a" }}
          className="flex-1 py-4 rounded-lg text-white font-bold text-base"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
