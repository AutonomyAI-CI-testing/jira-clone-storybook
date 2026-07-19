import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    style={{ backgroundColor: "#2a2a2a" }}
    className="w-full max-w-sm p-6 flex flex-col"
  >
    {/* Header row */}
    <div className="flex items-center justify-between mb-2">
      <span className="text-lg font-bold text-white">UI magician Agent</span>
      <HiCog size={24} className="text-white" />
    </div>

    {/* Subtext row */}
    <div className="flex items-center gap-1" style={{ color: "#b5651d" }}>
      <HiChevronUp size={16} />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    {/* Spacer */}
    <div className="h-10" />

    {/* Add New Design section header */}
    <div className="flex items-center gap-2 mb-5">
      <HiChevronUp size={18} className="text-white" />
      <span className="text-lg font-bold text-white">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="flex items-center gap-2 mb-2">
      <span className="text-sm font-medium text-white">Personal Access Token</span>
      <HiInformationCircle size={16} className="text-gray-400" />
    </div>
    <input
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="w-full rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      style={{ backgroundColor: "#333", border: "1px solid #4a4a4a" }}
    />

    {/* Design URL */}
    <div className="flex items-center gap-2 mt-4 mb-2">
      <span className="text-sm font-medium text-white">Design URL</span>
      <HiInformationCircle size={16} className="text-gray-400" />
    </div>
    <input
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="w-full rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
      style={{ backgroundColor: "#333", border: "1px solid #4a4a4a" }}
    />

    {/* Two side-by-side buttons */}
    <div className="flex gap-4 mt-6">
      <button
        type="button"
        className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
        style={{ backgroundColor: "#b5651d" }}
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded-lg py-3 text-sm font-bold text-white"
        style={{ backgroundColor: "#b5651d" }}
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-10">
      <span className="text-lg font-bold text-white">Recent Breakdowns</span>
    </div>
  </div>
);
