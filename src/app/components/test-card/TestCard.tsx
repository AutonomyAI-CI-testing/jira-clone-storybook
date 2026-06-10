import { IoSettingsOutline } from 'react-icons/io5';
import { HiInformationCircle, HiChevronUp } from 'react-icons/hi';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1e] p-4 text-white font-[Inter] flex flex-col gap-4">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h2>
        <IoSettingsOutline className="text-[#8b9291]" size={18} aria-label="Settings" />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#8b9291]" size={16} />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">From entire frame to a singl...</p>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mt-4">
        <HiChevronUp className="text-[#b2b2b1]" size={16} />
        <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">Add New Design</h3>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px] font-semibold">Personal Access Token</label>
          <HiInformationCircle className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border-[1px] border-[#a5adad] p-2 rounded-sm w-full text-white text-[11.5px] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-[#a3a3a2] text-[11.5px] font-semibold">Design URL</label>
          <HiInformationCircle className="text-[#a3a3a2]" size={14} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border-2 border-[#929291] p-2 rounded-sm w-full text-white text-[10.5px] placeholder-[#71726e] focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] p-2 rounded-[4px]">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold text-[11.5px] p-2 rounded-[4px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold mt-4">Recent Breakdowns</h3>
    </div>
  );
};
