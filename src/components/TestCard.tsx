import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    backgroundColor: "#3a3a3a",
    border: "1px solid #555555",
    color: "#ccbbaa",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#b45309",
  };

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="flex w-full min-h-screen flex-col px-5 pt-6 pb-10"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={22} color="#ffffff" />
      </div>

      {/* 2. Collapsed section row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={16} color="#9a7a6a" />
        <span className="text-sm" style={{ color: "#9a7a6a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section */}
      <div className="mt-12 flex items-center gap-3">
        <FiChevronUp size={18} color="#ffffff" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="mt-6">
        <div className="mb-2 flex items-center gap-2">
          <label style={{ color: "#c8b8a8" }} className="text-sm font-medium">
            Personal Access Token
          </label>
          <FiInfo size={16} color="#c8b8a8" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputStyle}
          className="w-full rounded px-4 py-3 text-sm outline-none placeholder:text-gray-500"
          readOnly
        />
      </div>

      {/* 5. Design URL field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <label style={{ color: "#c8b8a8" }} className="text-sm font-medium">
            Design URL
          </label>
          <FiInfo size={16} color="#c8b8a8" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
          className="w-full rounded px-4 py-3 text-sm outline-none placeholder:text-gray-500"
          readOnly
        />
      </div>

      {/* 6. Awesome + Prepare buttons */}
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          style={buttonStyle}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={buttonStyle}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
