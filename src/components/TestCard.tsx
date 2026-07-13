import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a" }}
      className="flex w-full max-w-sm flex-col gap-5 p-6"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <FiSettings color="#ffffff" size={20} />
      </div>

      {/* 2. Subtitle row with chevron */}
      <div className="flex items-center gap-2">
        <FiChevronUp color="#c97c50" size={14} />
        <span style={{ color: "#c97c50" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. "Add New Design" section heading */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp color="#ffffff" size={18} />
        <h2 className="text-xl font-bold text-white">Add New Design</h2>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">
            Personal Access Token
          </span>
          <AiOutlineInfoCircle color="#aaaaaa" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#333333",
            borderColor: "#555555",
            color: "#aaaaaa",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* 5. Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">Design URL</span>
          <AiOutlineInfoCircle color="#aaaaaa" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#333333",
            borderColor: "#555555",
            color: "#aaaaaa",
          }}
          className="w-full rounded border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* 6. Two buttons side by side */}
      <div className="flex gap-3 pt-1">
        <button
          type="button"
          style={{ backgroundColor: "#b5531a" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b5531a" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns footer heading */}
      <h2 className="mt-4 text-xl font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
};
