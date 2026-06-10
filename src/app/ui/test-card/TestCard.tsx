import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full p-5 bg-[#1c1c1a]">
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] font-semibold text-sm">UI magician Agent</span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={16} />
      </div>

      {/* Collapsed row */}
      <div className="flex items-center gap-2 mt-2">
        <IoChevronUp className="text-[#8b9291]" size={16} />
        <span className="text-[#8b9291] text-xs font-semibold">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mt-8">
        <IoChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-[#b2b2b1] font-semibold text-sm">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label htmlFor="pat-input" className="text-[#a4a4a3] text-xs font-semibold">Personal Access Token</label>
          <IoInformationCircleOutline className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] font-semibold mt-1 rounded-sm"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label htmlFor="url-input" className="text-[#a4a4a3] text-xs font-semibold">Design URL</label>
          <IoInformationCircleOutline className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border border-[#929291] px-3 py-2 text-xs text-[#737470] placeholder:text-[#737470] font-semibold mt-1 rounded-sm"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mt-5 justify-center">
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold px-8 py-2.5 rounded-lg">Awesome</button>
        <button className="bg-[#843a17] text-[#8c8078] text-xs font-semibold px-8 py-2.5 rounded-lg">Prepare</button>
      </div>

      {/* Recent Breakdowns heading */}
      <h2 className="mt-8 text-[#b0b0b0] text-sm font-semibold">Recent Breakdowns</h2>
    </div>
  );
};
