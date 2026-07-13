import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="flex w-full max-w-sm flex-col gap-4 p-6"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings size={20} color="#ffffff" />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={14} color="#c97c50" />
        <span style={{ color: "#c97c50" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Section heading */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={16} color="#ffffff" />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <AiOutlineInfoCircle size={16} color="#ffffff" />
        </div>
        <input
          style={{
            backgroundColor: "#333333",
            borderColor: "#555555",
            color: "#9ca3af",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* 5. Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-white">Design URL</span>
          <AiOutlineInfoCircle size={16} color="#ffffff" />
        </div>
        <input
          style={{
            backgroundColor: "#333333",
            borderColor: "#555555",
            color: "#9ca3af",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* 6. Action buttons */}
      <div className="flex gap-3">
        <button
          style={{ backgroundColor: "#b5531a" }}
          className="flex-1 rounded-lg px-6 py-3 font-semibold text-white"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b5531a" }}
          className="flex-1 rounded-lg px-6 py-3 font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 7. Footer heading */}
      <h2 className="mt-4 text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
