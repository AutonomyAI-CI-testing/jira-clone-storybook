import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static smoke-test render of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no data, no side effects.
 * Colours, sizes and offsets are the frame's own values (approximate), so it
 * deliberately stays off the app's semantic token set.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 pb-6 font-[Inter,system-ui,sans-serif] text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <FiSettings size={16} aria-hidden="true" />
      </div>

      {/* Collapsed row */}
      <div className="mt-[18px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#8b9291]">
        <FiChevronUp size={12} aria-hidden="true" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        <FiChevronUp size={14} aria-hidden="true" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <label className="mt-7 block">
        <span className="flex items-center gap-3 text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
          <FiInfo size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </label>

      {/* Design URL */}
      <label className="mt-3 block">
        <span className="flex items-center gap-3 text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
          <FiInfo size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </label>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center rounded bg-[#843a17] pl-4 text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center rounded bg-[#843a17] pl-4 text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
