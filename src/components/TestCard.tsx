import { RiSettings3Line } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";
import { BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen p-5 font-sans"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <RiSettings3Line size={22} style={{ color: "#a0a0a0" }} />
      </div>

      {/* Chevron subtitle */}
      <div className="mt-3 flex items-center gap-2">
        <BsChevronUp size={12} style={{ color: "#b5703a" }} />
        <span className="text-sm" style={{ color: "#b5703a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <BsChevronUp size={14} style={{ color: "#e8e8e8" }} />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm" style={{ color: "#c0c0c0" }}>
          Personal Access Token
        </span>
        <HiInformationCircle size={16} style={{ color: "#a0a0a0" }} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #555555",
          color: "#888888",
        }}
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm" style={{ color: "#c0c0c0" }}>
          Design URL
        </span>
        <HiInformationCircle size={16} style={{ color: "#a0a0a0" }} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-6 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #777777",
          color: "#888888",
        }}
      />

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-xl px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-xl px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
