import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="w-full max-w-[400px] p-5 text-white"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} className="text-white opacity-80" />
      </div>

      {/* Chevron + muted text row */}
      <div className="mb-10 flex items-center gap-2">
        <HiChevronUp size={16} style={{ color: "#c47a3a" }} />
        <span style={{ color: "#c47a3a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section heading */}
      <div className="mb-6 flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token label + input */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <HiInformationCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{ backgroundColor: "#1e1e1e", borderColor: "#555" }}
          className="w-full rounded border px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none"
        />
      </div>

      {/* Design URL label + input */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <HiInformationCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{ backgroundColor: "#1e1e1e", borderColor: "#555" }}
          className="w-full rounded border px-3 py-3 text-sm text-white placeholder:text-white/40 outline-none"
        />
      </div>

      {/* Buttons row */}
      <div className="mb-10 flex gap-4">
        <button
          style={{ backgroundColor: "#8b4513" }}
          className="flex-1 rounded-lg px-6 py-3 font-bold text-white"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#8b4513" }}
          className="flex-1 rounded-lg px-6 py-3 font-bold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
