import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from 'react-icons/ri';

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="bg-[#2a2a2a] text-white min-h-screen p-4 max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold">UI magician Agent</span>
          <RiSettings3Line className="text-gray-400 text-2xl" />
        </div>

        {/* Collapsed row */}
        <div className="flex items-center gap-1 mb-8">
          <RiArrowUpSLine className="text-[#b5703e] text-lg" />
          <span className="text-[#b5703e] text-sm">From entire frame to a singl...</span>
        </div>

        {/* Add New Design section */}
        <div className="flex items-center gap-2 mb-4">
          <RiArrowUpSLine className="text-white text-xl" />
          <span className="text-xl font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm font-medium">Personal Access Token</span>
            <RiInformationLine className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-sm font-medium">Design URL</span>
            <RiInformationLine className="text-gray-400 text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 bg-[#c1622f] text-white font-semibold py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#c1622f] text-white font-semibold py-3 rounded-lg">
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

export default TestCard;
