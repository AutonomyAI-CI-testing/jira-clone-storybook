import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ background: "#2a2a2a" }}
      className="min-h-screen w-full p-5 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={22} className="text-white" />
      </div>

      {/* 2. Collapsed section row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: "#a07860" }} />
        <span className="text-sm" style={{ color: "#a07860" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section header */}
      <div className="mt-12 flex items-center gap-3">
        <FiChevronUp size={18} className="text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Personal Access Token
          </label>
          <FiInfo size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{ background: "#363636" }}
          className="w-full rounded border border-gray-600 px-4 py-3 text-sm text-gray-400 outline-none placeholder:text-gray-500"
        />
      </div>

      {/* 5. Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm font-medium text-gray-300">
            Design URL
          </label>
          <FiInfo size={16} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{ background: "#363636" }}
          className="w-full rounded border border-gray-500 px-4 py-3 text-sm text-gray-400 outline-none placeholder:text-gray-500"
        />
      </div>

      {/* 6. Awesome + Prepare buttons */}
      <div className="mt-7 flex gap-4">
        <button
          type="button"
          style={{ background: "#b45309" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ background: "#b45309" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns */}
      <h2 className="mt-12 text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
