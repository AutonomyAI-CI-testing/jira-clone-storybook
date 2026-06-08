
import { IoSettingsOutline } from 'react-icons/io5';
import { HiChevronUp, HiInformationCircle } from 'react-icons/hi';

export const TestCard = () => {
  return (
    <div id="testElem" className="p-4 rounded-lg shadow-lg bg-[#272822] text-white w-96 mx-auto my-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#b5b5b5] text-xl font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-gray-400 text-2xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6">
        <HiChevronUp className="text-[#8b9291] mr-1" />
        <p className="text-[#8b9291] text-sm">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <HiChevronUp className="text-white mr-1" />
        <h3 className="text-white text-lg font-bold">Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <label htmlFor="token" className="flex items-center text-[#a4a4a3] text-sm mb-1">
          Personal Access Token
          <HiInformationCircle className="ml-1" />
        </label>
        <input
          type="text"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border border-[#929291] text-white placeholder-[#737470]"
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <label htmlFor="designUrl" className="flex items-center text-[#a4a4a3] text-sm mb-1">
          Design URL
          <HiInformationCircle className="ml-1" />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-white placeholder-[#71726e]"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-6">
        <button className="flex-1 py-2 rounded-lg bg-[#843a17] text-[#8c8078] font-semibold">
          Awesome
        </button>
        <button className="flex-1 py-2 rounded-lg bg-[#843a17] text-[#8c8078] font-semibold">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <h3 className="text-[#b0b0b0] text-lg font-bold">Recent Breakdowns</h3>
    </div>
  );
};
