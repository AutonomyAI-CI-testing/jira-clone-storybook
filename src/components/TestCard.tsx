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
      className="flex flex-col w-full min-h-screen px-5 pt-6 pb-10"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={22} color="#ffffff" />
      </div>

      {/* 2. Collapsed section row */}
      <div className="flex items-center gap-2 mt-4">
        <FiChevronUp size={16} color="#9a7a6a" />
        <span className="text-sm" style={{ color: "#9a7a6a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design section header */}
      <div className="flex items-center gap-3 mt-12">
        <FiChevronUp size={20} color="#ffffff" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium" style={{ color: "#d4c4b4" }}>
            Personal Access Token
          </span>
          <FiInfo size={16} color="#d4c4b4" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputStyle}
          className="w-full rounded px-3 py-3 text-sm outline-none placeholder:text-sm"
        />
      </div>

      {/* 5. Design URL field */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium" style={{ color: "#d4c4b4" }}>
            Design URL
          </span>
          <FiInfo size={16} color="#d4c4b4" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
          className="w-full rounded px-3 py-3 text-sm outline-none placeholder:text-sm"
        />
      </div>

      {/* 6. Button row: Awesome + Prepare */}
      <div className="flex gap-4 mt-8">
        <button
          type="button"
          style={buttonStyle}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
        >
          Awesome
        </button>
        <button
          type="button"
          style={buttonStyle}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-base"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns heading */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
