import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { BsChevronUp } from "react-icons/bs";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div
        className="w-full max-w-sm rounded-lg p-6 text-white"
        style={{ backgroundColor: "#2a2a2a" }}
      >
        {/* Header row */}
        <div className="mb-2 flex items-center justify-between">
          <span className="text-lg font-bold">UI magician Agent</span>
          <AiOutlineSetting className="text-gray-300" size={22} />
        </div>

        {/* Subtitle row */}
        <div className="mb-8 flex items-center gap-2">
          <BsChevronUp className="text-amber-700" size={14} />
          <span className="truncate text-sm text-amber-700">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mb-6 flex items-center gap-2">
          <BsChevronUp className="text-white" size={16} />
          <span className="text-xl font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-200">
              Personal Access Token
            </span>
            <AiOutlineInfoCircle className="text-gray-400" size={16} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border border-gray-600 px-3 py-2 text-sm text-gray-400 placeholder:text-gray-500 focus:outline-none"
            style={{ backgroundColor: "#333333" }}
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-1 flex items-center gap-2">
            <span className="text-sm font-medium text-gray-200">
              Design URL
            </span>
            <AiOutlineInfoCircle className="text-gray-400" size={16} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border border-gray-500 px-3 py-2 text-sm text-gray-400 placeholder:text-gray-500 focus:outline-none"
            style={{ backgroundColor: "#333333" }}
          />
        </div>

        {/* Buttons */}
        <div className="mb-8 flex gap-4">
          <button
            className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c0622a" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: "#c0622a" }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <span className="text-xl font-bold">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
};
