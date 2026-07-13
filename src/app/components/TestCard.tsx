import { IoSettingsOutline } from "react-icons/io5";
import { BsChevronUp } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="bg-[#1d2125] text-[#dee4ea] p-5 w-[320px] flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-[#dee4ea]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-[#dee4ea] text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <BsChevronUp className="text-[#579dff] text-sm" />
        <span className="text-[#579dff] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <BsChevronUp className="text-[#dee4ea] text-base" />
        <span className="text-lg font-bold text-[#dee4ea]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#c7d1db]">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-[#c7d1db] text-base" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#2c333a] border border-[#454f59] rounded text-sm text-[#dee4ea] placeholder:text-[#596773] px-3 py-2 w-full outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm text-[#c7d1db]">Design URL</label>
          <AiOutlineInfoCircle className="text-[#c7d1db] text-base" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="bg-[#2c333a] border border-[#454f59] rounded text-sm text-[#dee4ea] placeholder:text-[#596773] px-3 py-2 w-full outline-none"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 bg-[#b65c02] text-[#dee4ea] font-medium rounded-lg py-3 text-sm"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 bg-[#b65c02] text-[#dee4ea] font-medium rounded-lg py-3 text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-lg font-bold text-[#dee4ea]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
