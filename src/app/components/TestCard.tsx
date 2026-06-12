
import { RiSettings3Line, RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#1a1a1a] p-6 w-[400px] text-white rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">UI magician Agent</h2>
        <RiSettings3Line className="w-5 h-5" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center space-x-2 mb-6">
        <RiArrowUpSLine className="w-5 h-5" />
        <p className="text-[#c97d4e]">From entire frame to a singl...</p>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center space-x-2 mb-4">
        <RiArrowUpSLine className="w-5 h-5" />
        <h3 className="font-bold text-base">Add New Design</h3>
      </div>

      {/* Personal Access Token input */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <label htmlFor="pat" className="text-sm">Personal Access Token</label>
          <RiInformationLine className="w-4 h-4" />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500"
        />
      </div>

      {/* Design URL input */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <label htmlFor="designUrl" className="text-sm">Design URL</label>
          <RiInformationLine className="w-4 h-4" />
        </div>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button className="flex-1 py-2 bg-[#b5451b] text-white rounded-lg font-semibold">Awesome</button>
        <button className="flex-1 py-2 bg-[#b5451b] text-white rounded-lg font-semibold">Prepare</button>
      </div>

      {/* Recent Breakdowns heading */}
      <div>
        <h3 className="font-bold text-base">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
