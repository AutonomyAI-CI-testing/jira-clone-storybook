import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full flex-col bg-[#222] px-5 py-6 text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <AiOutlineSetting className="text-2xl text-white" />
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-1">
        <BiChevronUp className="text-lg text-[#b87a50]" />
        <span className="text-sm text-[#b87a50]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <BiChevronUp className="text-xl text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-[#ccc]">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-base text-[#aaa]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#777]"
        />
      </div>

      {/* Design URL field */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-[#ccc]">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-base text-[#aaa]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555] bg-[#2a2a2a] px-3 py-2 text-sm text-[#888] placeholder-[#666] outline-none focus:border-[#777]"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c30] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a04f28]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c30] px-4 py-3 text-sm font-semibold text-white hover:bg-[#a04f28]">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
