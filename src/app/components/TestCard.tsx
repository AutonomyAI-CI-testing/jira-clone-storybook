import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="flex w-full max-w-sm flex-col rounded-lg p-5 font-sans text-white"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xl font-bold">UI magician Agent</span>
          <AiOutlineSetting size={24} className="text-gray-300" />
        </div>

        {/* Subtitle row */}
        <div className="mb-6 flex items-center gap-2">
          <BsChevronUp size={14} className="text-gray-400" />
          <span className="truncate text-sm" style={{ color: "#a07850" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div
          className="mb-5 flex items-center gap-2 rounded-md p-3"
          style={{ backgroundColor: "#333333" }}
        >
          <BsChevronUp size={16} className="text-white" />
          <span className="text-lg font-bold text-white">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-4">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-200">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border px-3 py-2 text-sm text-gray-400 outline-none"
            style={{
              backgroundColor: "#2a2a2a",
              borderColor: "#555",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-200">
              Design URL
            </span>
            <AiOutlineInfoCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border px-3 py-2 text-sm text-gray-400 outline-none"
            style={{
              backgroundColor: "#2a2a2a",
              borderColor: "#777",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="mb-8 flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c0622a" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c0622a" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span className="text-lg font-bold text-white">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
