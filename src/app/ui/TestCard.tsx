import { AiOutlineSetting } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { FiChevronUp } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] rounded-lg bg-[#252525] p-4 text-white flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold">UI magician Agent</h1>
        <AiOutlineSetting className="text-lg text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#b07a50] text-xs">
        <FiChevronUp className="text-sm" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-1">
          <FiChevronUp className="text-sm" />
          <h2 className="text-sm font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-xs font-medium text-gray-200">
              Personal Access Token
            </label>
            <BsInfoCircle className="text-xs text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#555] bg-transparent px-2 py-1.5 text-xs text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-xs font-medium text-gray-200">
              Design URL
            </label>
            <BsInfoCircle className="text-xs text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded border border-[#555] bg-transparent px-2 py-1.5 text-xs text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-1">
          <button className="flex-1 rounded-lg bg-[#b05a2a] py-2 text-sm font-semibold text-white hover:bg-[#c06030] transition-colors">
            Awesome
          </button>
          <button className="flex-1 rounded-lg bg-[#9a4e22] py-2 text-sm font-semibold text-white hover:bg-[#aa5e32] transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Recent Breakdowns */}
      <h2 className="text-sm font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
