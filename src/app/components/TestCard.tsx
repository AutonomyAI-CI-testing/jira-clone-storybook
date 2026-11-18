import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" settings panel from the Figma
 * frame, used as a design-to-code smoke test. Self-contained: no props, no state,
 * no handlers. Colours and sizes are taken from the frame's style guide and are
 * intentionally literal, since the palette has no semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary text-[11.5px] text-[#a4a4a3]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FiSettings size={16} className="text-[#b5b5b5]" aria-hidden />
    </div>

    {/* Collapsed row */}
    <div className="mt-[18px] flex items-center gap-1.5">
      <FiChevronUp size={14} className="text-[#8b9291]" aria-hidden />
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    {/* Section row */}
    <div className="-mx-[18px] mt-[62px] flex items-center gap-2 bg-white/5 px-[18px] py-4">
      <FiChevronUp size={14} className="text-[#b2b2b1]" aria-hidden />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-3 flex items-center gap-5">
      <label htmlFor="testElem-token">Personal Access Token</label>
      <FiInfo size={15} className="text-[#a4a4a3]" aria-hidden />
    </div>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-5">
      <label htmlFor="testElem-url" className="text-[#a3a3a2]">
        Design URL
      </label>
      <FiInfo size={15} className="text-[#a3a3a2]" aria-hidden />
    </div>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    {/* Actions */}
    <div className="mt-[21px] flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <span className="mt-[46px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
