import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#242424] p-5 font-sans text-gray-100"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xl font-bold text-gray-100">UI magician Agent</span>
        <HiOutlineCog size={24} className="text-gray-400" />
      </div>

      {/* Collapsible row */}
      <div className="mb-8 flex items-center gap-2">
        <HiChevronUp size={16} className="text-gray-400" />
        <span className="text-sm text-[#c07a50]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="rounded-md bg-[#2e2e2e] p-4">
        {/* Section heading */}
        <div className="mb-5 flex items-center gap-2">
          <HiChevronUp size={18} className="text-gray-200" />
          <span className="text-lg font-bold text-gray-100">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-sm font-medium text-gray-200">
              Personal Access Token
            </span>
            <HiInformationCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded border border-[#555] bg-[#333] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-1 flex items-center gap-1.5">
            <span className="text-sm font-medium text-gray-200">Design URL</span>
            <HiInformationCircle size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded border border-[#666] bg-[#2e2e2e] px-3 py-2.5 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg bg-[#b5511a] py-3 text-sm font-semibold text-white"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg bg-[#b5511a] py-3 text-sm font-semibold text-white"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <span className="text-xl font-bold text-gray-100">Recent Breakdowns</span>
      </div>
    </div>
  );
};
