import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div id="testElem" className="w-full max-w-[320px] bg-[#2a2a2a] p-5 font-sans">
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <IoSettingsOutline size={22} className="text-[#a1a1aa]" />
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-sm font-bold text-[#b45309]">^</span>
        <span className="text-sm text-[#b45309]">From entire frame to a singl...</span>
      </div>

      {/* 3. Section header */}
      <div className="mt-10 flex items-center gap-2">
        <span className="text-base font-bold text-white">^</span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* 4. Label: Personal Access Token */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm font-semibold text-white">Personal Access Token</span>
        <AiOutlineInfoCircle size={16} className="text-[#a1a1aa]" />
      </div>

      {/* 5. Input: Personal Access Token */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[#52525b] bg-[#27272a] px-3 py-2 text-sm text-[#a1a1aa] placeholder-[#71717a] outline-none"
        readOnly
      />

      {/* 6. Label: Design URL */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-sm font-semibold text-white">Design URL</span>
        <AiOutlineInfoCircle size={16} className="text-[#a1a1aa]" />
      </div>

      {/* 7. Input: Design URL */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-[#a1a1aa] bg-[#27272a] px-3 py-2 text-sm text-[#a1a1aa] placeholder-[#71717a] outline-none"
        readOnly
      />

      {/* 8. Two buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-xl bg-[#c2410c] py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-xl bg-[#c2410c] py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* 9. Footer */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
