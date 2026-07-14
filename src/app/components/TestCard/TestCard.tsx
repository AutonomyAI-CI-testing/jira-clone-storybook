import { IoSettingsOutline } from "react-icons/io5";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div id="testElem" className="w-full max-w-sm bg-[#2a2a2a] p-5 flex flex-col gap-5">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">
          UI magician Agent
        </h1>
        <IoSettingsOutline className="text-white" size={22} />
      </div>

      {/* Subtext row */}
      <div className="flex items-center gap-1">
        <BiChevronUp className="text-[#c47a4a]" size={18} />
        <span className="text-[#c47a4a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2">
        <BiChevronUp className="text-white" size={22} />
        <h2 className="text-white font-bold text-lg">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-white opacity-60" size={16} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded bg-[#3a3a3a] border border-[#555555] px-3 py-3 text-sm text-[#888888] placeholder:text-[#666666] outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-white text-sm">
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-white opacity-60" size={16} />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded bg-[#3a3a3a] border border-[#888888] px-3 py-3 text-sm text-[#888888] placeholder:text-[#666666] outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 justify-center mt-1">
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#b85c2c] px-4 py-3 text-white font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-xl bg-[#a0502a] px-4 py-3 text-white font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns section heading */}
      <h2 className="text-white font-bold text-lg">
        Recent Breakdowns
      </h2>
    </div>
  );
}
