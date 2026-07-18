import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  const inputStyle = {
    backgroundColor: "#3a3a3a",
    borderColor: "#555555",
  };

  const buttonStyle = {
    backgroundColor: "#b45309",
  };

  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="min-h-screen w-full max-w-sm px-5 py-6"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline className="text-gray-400" size={22} />
      </div>

      {/* 2. Collapsed section row */}
      <div className="mt-3 flex items-center gap-2">
        <FiChevronUp className="text-amber-700" size={16} />
        <span className="text-sm text-amber-700">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer + Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="mt-5">
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="pat-input"
            className="text-sm font-medium"
            style={{ color: "#d4c4b4" }}
          >
            Personal Access Token
          </label>
          <FiInfo size={15} className="text-gray-500" />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputStyle}
          className="w-full rounded border px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none"
        />
      </div>

      {/* 5. Design URL field */}
      <div className="mt-4">
        <div className="mb-2 flex items-center gap-2">
          <label
            htmlFor="url-input"
            className="text-sm font-medium"
            style={{ color: "#d4c4b4" }}
          >
            Design URL
          </label>
          <FiInfo size={15} className="text-gray-500" />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
          className="w-full rounded border px-3 py-3 text-sm text-gray-300 placeholder-gray-500 outline-none"
        />
      </div>

      {/* 6. Button row */}
      <div className="mt-6 flex gap-4">
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

      {/* 7. Recent Breakdowns heading */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
