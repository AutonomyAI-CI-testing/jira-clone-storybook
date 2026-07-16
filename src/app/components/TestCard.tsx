import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-5 font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings className="text-white" size={22} />
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-white" size={16} />
        <span className="text-sm text-[#c97a4a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5">
        <label className="mb-1 flex items-center gap-2 text-sm text-white">
          Personal Access Token
          <FiInfo className="text-white opacity-70" size={16} />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#444] bg-[#1e1e1e] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4">
        <label className="mb-1 flex items-center gap-2 text-sm text-white">
          Design URL
          <FiInfo className="text-white opacity-70" size={16} />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-xl bg-[#b85c30] px-8 py-3 text-sm font-semibold text-white hover:bg-[#a04f28]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-xl bg-[#b85c30] px-8 py-3 text-sm font-semibold text-white hover:bg-[#a04f28]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
