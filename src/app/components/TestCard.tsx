import { IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] w-64 p-5"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#b5b5b5]" size={14} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mt-2">
        <HiChevronUp className="text-[#8b9291]" size={10} />
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-3">
        <HiChevronUp className="text-[#b2b2b1]" size={12} />
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </span>
          <IoInformationCircleOutline className="text-[#a4a4a3]" size={14} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-[#272822] border border-[#a5adad] py-2 px-3 text-[11.5px] font-semibold outline-none text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </span>
          <IoInformationCircleOutline className="text-[#a3a3a2]" size={14} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-[#272822] border-2 border-[#929291] py-2 px-3 text-[11.5px] font-semibold outline-none text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 justify-center mb-6">
        <button className="bg-[#843a17] text-[#8c8078] rounded px-6 py-2 text-[11.5px] font-semibold">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] rounded px-6 py-2 text-[11.5px] font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
