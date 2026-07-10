import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex min-h-screen w-full flex-col bg-[#2a2a2a] px-5 py-6 font-sans text-white">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#e8e0d8]">
            UI magician Agent
          </span>
          <FiSettings size={22} className="text-[#a89880]" />
        </div>

        {/* Collapsible indicator */}
        <div className="mt-3 flex items-center gap-2">
          <FiChevronUp size={16} className="text-[#c4a882]" />
          <span className="text-sm text-[#c4a882]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div className="mt-10" />

        {/* Add New Design section */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={20} className="text-[#e8e0d8]" />
          <span className="text-xl font-bold text-[#e8e0d8]">
            Add New Design
          </span>
        </div>

        {/* Form fields */}
        <div className="mt-5 flex flex-col gap-4">
          {/* Personal Access Token */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#d4c8b8]">
                Personal Access Token
              </span>
              <FiInfo size={16} className="text-[#a89880]" />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded-sm border border-[#4a4540] bg-[#333030] px-3 py-3 text-sm text-[#888070] placeholder-[#888070] outline-none focus:border-[#6a5a4a]"
            />
          </div>

          {/* Design URL */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#d4c8b8]">
                Design URL
              </span>
              <FiInfo size={16} className="text-[#a89880]" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded-sm border border-[#5a5550] bg-[#333030] px-3 py-3 text-sm text-[#888070] placeholder-[#888070] outline-none focus:border-[#6a5a4a]"
            />
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 rounded-lg bg-[#b85c2e] px-4 py-3 text-sm font-semibold text-[#f0e8e0] hover:bg-[#a54e24] active:bg-[#943f18]">
            Awesome
          </button>
          <button className="flex-1 rounded-lg bg-[#b85c2e] px-4 py-3 text-sm font-semibold text-[#f0e8e0] hover:bg-[#a54e24] active:bg-[#943f18]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-10">
          <span className="text-xl font-bold text-[#e8e0d8]">
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};
