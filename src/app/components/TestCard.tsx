import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-lg bg-[#181812] p-5 font-sans text-white"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-300">
          UI magician Agent
        </span>
        <FaCog className="text-gray-400" size={18} />
      </div>

      {/* Collapsed row */}
      <div className="mt-2 flex items-center gap-2">
        <FaChevronUp className="text-gray-500" size={10} />
        <span className="text-xs text-gray-400">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <FaChevronUp className="text-gray-300" size={12} />
        <span className="text-sm font-semibold text-gray-300">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400">
            Personal Access Token
          </span>
          <FaInfoCircle className="text-gray-500" size={12} />
        </div>
        <div className="mt-2 rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="text-xs text-gray-500">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-gray-400">
            Design URL
          </span>
          <FaInfoCircle className="text-gray-500" size={12} />
        </div>
        <div className="mt-2 rounded border-2 border-[#929291] bg-[#272822] px-3 py-2">
          <span className="text-xs text-gray-500">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2 text-sm font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#843a17] px-6 py-2 text-sm font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-sm font-semibold text-gray-400">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
