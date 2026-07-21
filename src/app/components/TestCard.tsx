import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e" }}
      className="min-h-screen w-full max-w-sm p-5"
    >
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiCog size={22} className="text-gray-400" />
      </div>

      {/* Collapsible row */}
      <div className="mb-10 flex items-center gap-2">
        <HiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm" style={{ color: "#c8956c" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mb-5 flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-sm text-white">Personal Access Token</span>
          <HiInformationCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-gray-600 px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
          style={{ backgroundColor: "#2a2a2a" }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-sm text-white">Design URL</span>
          <HiInformationCircle size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-gray-500 px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none focus:border-gray-400"
          style={{ backgroundColor: "#2a2a2a" }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 px-2">
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b5451b" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10 border-t border-gray-700 pt-4">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
