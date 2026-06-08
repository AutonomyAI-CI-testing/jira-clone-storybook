import { AiOutlineSetting } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { HiInformationCircle } from "react-icons/hi";

/**
 * TestCard component - UI for integrating Figma designs
 *
 * Displays a darkly-themed control panel for connecting design files.
 * Used for testing/preview purposes to verify visual consistency and component behavior.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="font-sans bg-[#2a2a2a] p-4 text-[#b5b5b5]">
      {/* Header Row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold">UI magician Agent</h1>
        <AiOutlineSetting className="text-lg" />
      </div>

      {/* Collapsed Row */}
      <div className="mb-6 flex items-center">
        <RiArrowDropUpLine className="text-lg text-[#8b9291]" />
        <span className="ml-1 text-[12px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6"></div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="mb-2 flex items-center">
          <RiArrowDropUpLine className="text-lg text-[#b2b2b1]" />
          <h2 className="ml-1 text-[13.5px] font-semibold text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-3">
          <label
            htmlFor="token"
            className="mb-1 flex items-center text-[11.5px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
            <HiInformationCircle className="ml-1 text-sm" />
          </label>
          <input
            type="text"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded-md border border-[#555] bg-[#3b3b3b] p-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470]"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-10">
          <label
            htmlFor="design-url"
            className="mb-1 flex items-center text-[11.5px] font-semibold text-[#a4a4a3]"
          >
            Design URL
            <HiInformationCircle className="ml-1 text-sm" />
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded-md border border-[#555] bg-[#3b3b3b] p-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470]"
          />
        </div>

        {/* Buttons */}
        <div className="mb-10 flex space-x-4">
          <button className="flex-1 rounded-lg bg-[#b5451b] py-2 text-[13.5px] font-semibold text-[#c9b0a4]">
            Awesome
          </button>
          <button className="flex-1 rounded-lg bg-[#b5451b] py-2 text-[13.5px] font-semibold text-[#c9b0a4]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Heading */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
