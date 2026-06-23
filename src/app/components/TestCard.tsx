import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] p-4 font-sans text-white mx-auto my-8"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-[#b5b5b5] text-[16px]" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-6">
        <HiChevronUp className="text-[#8b9291] text-[12px]" />
        <p className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-3">
          <HiChevronUp className="text-[#b2b2b1] text-[12px]" />
          <h3 className="text-[#b2b2b1] text-[13.5px] font-semibold">
            Add New Design
          </h3>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
            Personal Access Token
            <AiOutlineInfoCircle className="text-[#a4a4a3] text-[12px]" />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] font-semibold rounded outline-none focus:border-white"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-6">
          <label className="flex items-center gap-1 text-[#a4a4a3] text-[11.5px] font-semibold mb-2">
            Design URL
            <AiOutlineInfoCircle className="text-[#a4a4a3] text-[12px]" />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 bg-[#272822] border-2 border-[#929291] text-[#737470] text-[11.5px] font-semibold rounded outline-none focus:border-white"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2 mb-6">
          <button className="flex-1 py-2 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg">
            Awesome
          </button>
          <button className="flex-1 py-2 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Footer */}
      <div>
        <h3 className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
