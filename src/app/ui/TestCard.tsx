import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#252525" }}
      className="mx-auto w-full max-w-[400px] px-5 py-5"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={22} style={{ color: "#888" }} />
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <HiChevronUp size={14} style={{ color: "#888" }} />
        <span style={{ color: "#c17a3b" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-12" />

      {/* 4. Section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <h2 className="text-2xl font-bold text-white">Add New Design</h2>
      </div>

      {/* 5. Form fields */}
      <div className="mt-6 flex flex-col gap-4">
        {/* Personal Access Token */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="pat-input" className="text-sm font-semibold text-white">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle size={16} style={{ color: "#888" }} />
          </div>
          <input
            id="pat-input"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            style={{
              backgroundColor: "#333",
              borderColor: "#555",
              color: "#ccc",
            }}
            className="w-full rounded border px-3 py-2.5 text-sm placeholder:text-sm focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label htmlFor="url-input" className="text-sm font-semibold text-white">
              Design URL
            </label>
            <AiOutlineInfoCircle size={16} style={{ color: "#888" }} />
          </div>
          <input
            id="url-input"
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={{
              backgroundColor: "#333",
              borderColor: "#555",
              color: "#ccc",
            }}
            className="w-full rounded border px-3 py-2.5 text-sm placeholder:text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* 6. Two buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          style={{ backgroundColor: "#9e4e1e" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#9e4e1e" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* 7. Footer heading */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
