import {
  IoSettingsOutline,
  IoChevronUp,
  IoInformationCircleOutline,
} from "react-icons/io5";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#282420" }}
      className="w-full max-w-sm p-5 font-sans"
    >
      {/* Header row */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} color="#f5f5f4" />
      </div>

      {/* Subheading row */}
      <div className="mb-2 flex items-center gap-1">
        <IoChevronUp size={16} color="#b07050" />
        <span style={{ color: "#b07050" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="my-8" />

      {/* "Add New Design" section heading */}
      <div className="mb-4 flex items-center gap-2">
        <IoChevronUp size={18} color="#f5f5f4" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-sm text-white">Personal Access Token</label>
          <IoInformationCircleOutline size={16} color="#f5f5f4" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{ backgroundColor: "#302c28", borderColor: "#4a4540" }}
          className="w-full rounded border px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-sm text-white">Design URL</label>
          <IoInformationCircleOutline size={16} color="#f5f5f4" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{ backgroundColor: "#302c28", borderColor: "#4a4540" }}
          className="w-full rounded border px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mb-8 flex gap-4">
        <button
          style={{ backgroundColor: "#b35a2a" }}
          className="flex-1 rounded-lg py-3 font-semibold text-white"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b35a2a" }}
          className="flex-1 rounded-lg py-3 font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
