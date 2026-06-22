import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-[#e0e0e0] p-5 w-72 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <FiSettings className="text-gray-400" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-400" />
        <span className="text-gray-400 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-200" />
        <h3 className="font-bold text-md">Add New Design</h3>
      </div>

      {/* Personal Access Token input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="personalAccessToken" className="text-sm">Personal Access Token</label>
          <FiInfo className="text-gray-400 text-xs" />
        </div>
        <input
          id="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 w-full text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Design URL input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="designURL" className="text-sm">Design URL</label>
          <FiInfo className="text-gray-400 text-xs" />
        </div>
        <input
          id="designURL"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#3a3a3a] border border-[#555] rounded px-3 py-2 w-full text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 justify-center">
        <button className="bg-[#b5541a] text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-colors">
          Awesome
        </button>
        <button className="bg-[#b5541a] text-white rounded-lg px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h3 className="font-bold text-md mt-2">Recent Breakdowns</h3>
    </div>
  );
};
