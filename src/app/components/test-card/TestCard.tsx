import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] p-4 w-full font-sans">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-3">
        <IoChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design row */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </span>
          <IoInformationCircleOutline className="text-[#a4a4a3]" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#333] border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#737470] placeholder:text-[#737470] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </span>
          <IoInformationCircleOutline className="text-[#a3a3a2]" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#333] border border-[#4a4a4a] rounded px-3 py-2 text-[11.5px] text-[#71726e] placeholder:text-[#71726e] outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 mt-4 justify-center">
        <button className="bg-[#b85c38] text-white text-[11.5px] font-semibold rounded-lg px-6 py-2">
          Awesome
        </button>
        <button className="bg-[#b85c38] text-white text-[11.5px] font-semibold rounded-lg px-6 py-2">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
