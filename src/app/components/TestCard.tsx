import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen max-w-sm bg-[#282828] p-6 text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <FiSettings size={22} className="text-white opacity-80" />
      </div>

      {/* Collapsible section indicator */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp size={16} className="text-[#C07040]" />
        <span className="text-sm text-[#C07040]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="py-8" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-white">
            Personal Access Token
          </label>
          <FiInfo size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="mt-2 w-full rounded border border-[#444] bg-[#1E1E1E] p-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-white">Design URL</label>
          <FiInfo size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="mt-2 w-full rounded border border-[#444] bg-[#1E1E1E] p-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Button row */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#9C4A1A] px-6 py-3 font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#9C4A1A] px-6 py-3 font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="py-8" />

      {/* Recent Breakdowns heading */}
      <span className="text-lg font-bold text-white">Recent Breakdowns</span>
    </div>
  );
};
