import { HiCog, HiChevronUp } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi2";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="flex w-80 min-h-screen flex-col gap-4 p-5"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <HiCog size={24} className="text-font-subtlest" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={16} className="text-font-subtlest" />
        <span className="text-sm text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={20} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm">Personal Access Token</label>
          <HiOutlineInformationCircle size={16} className="text-font-subtlest" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded bg-transparent px-3 py-2 text-sm text-font-subtlest"
          style={{
            borderColor: "#555",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-white text-sm">Design URL</label>
          <HiOutlineInformationCircle size={16} className="text-font-subtlest" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded bg-transparent px-3 py-2 text-sm text-font-subtlest"
          style={{
            borderColor: "#555",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 rounded-lg py-3 font-semibold text-white"
          style={{ backgroundColor: "#b85c2c" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-semibold text-white"
          style={{ backgroundColor: "#b85c2c" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="py-4">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
