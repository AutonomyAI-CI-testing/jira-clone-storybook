import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no data, and nothing in the
 * app mounts it. It exists to prove the Figma -> component -> preview path.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 py-5 [font-family:Inter,system-ui,sans-serif] text-[13.5px] leading-[16px] font-semibold"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5]">UI magician Agent</span>
        <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
      </div>

      {/* Collapsed row */}
      <div className="mt-4 flex items-center gap-3">
        <FiChevronUp size={10} className="text-[#8b9291]" aria-hidden />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-20 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#b2b2b1]" aria-hidden />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="flex items-center gap-3">
          <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
            Design URL
          </span>
          <FiInfo size={15} className="text-[#a3a3a2]" aria-hidden />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-5 ml-6 flex gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
}
