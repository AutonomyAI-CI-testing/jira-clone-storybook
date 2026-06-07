import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div className="bg-[#1c1c1c] min-h-screen px-5 pt-8 pb-16 font-sans w-full">
      {/* Header row */}
      <div className="flex items-start justify-between mb-6">
        <span className="text-[#b5b5b5] text-[15px] font-semibold leading-tight">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5] mt-0.5 flex-shrink-0" size={26} />
      </div>

      {/* Subtitle row — chevron left-aligned, text inline */}
      <div className="flex items-center gap-2 mb-2">
        <FiChevronUp className="text-[#8b9291] flex-shrink-0" size={14} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Large gap between subtitle and Add New Design section */}
      <div className="mt-24" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#b2b2b1] flex-shrink-0" size={16} />
        <span className="text-[#b2b2b1] text-[15px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </label>
          <FiInfo className="text-[#a4a4a3] flex-shrink-0" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#929291] rounded text-[#737470] text-[11.5px] font-semibold px-4 py-5 outline-none placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </label>
          <FiInfo className="text-[#a3a3a2] flex-shrink-0" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border border-[#929291] rounded text-[#737470] text-[11.5px] font-semibold px-4 py-5 outline-none placeholder:text-[#737470]"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-4 mb-20">
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-5 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold py-5 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <h3 className="text-[#b0b0b0] text-[15px] font-semibold">
        Recent Breakdowns
      </h3>
    </div>
  );
};
