import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col bg-[#2a2a2a] px-5 py-6"
      style={{ minHeight: "100vh", maxWidth: "400px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xl text-white">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-white" size={24} />
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-1">
        <BiChevronUp className="text-white" size={18} />
        <span className="font-primary text-sm text-[#c1622f]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <BiChevronUp className="text-white" size={22} />
        <span className="font-primary-bold text-xl text-white">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="font-primary text-sm text-[#ccc]">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-[#aaa]" size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-3 font-primary text-sm text-[#888] outline-none placeholder:text-[#666]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="font-primary text-sm text-[#ccc]">Design URL</label>
          <AiOutlineInfoCircle className="text-[#aaa]" size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded border border-[#555] bg-[#1e1e1e] px-3 py-3 font-primary text-sm text-[#888] outline-none placeholder:text-[#666]"
        />
      </div>

      {/* Buttons row */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1622f] py-3 font-primary-bold text-sm text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#c1622f] py-3 font-primary-bold text-sm text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className="font-primary-bold text-xl text-white">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
