import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static redraw of the attached Figma frame ("UI magician Agent" panel).
 *
 * Smoke test: presentational only — no props, no state, no handlers. Colours are
 * the frame's own values as arbitrary utilities, because none of them sit within
 * range of a token this repo declares (see the design-token lookup for this task).
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings aria-hidden="true" size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <FiChevronUp aria-hidden="true" size={10} />
        <span className="text-[11.5px] leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
        <FiChevronUp aria-hidden="true" size={12} />
        <span className="font-primary-bold text-[13.5px] leading-[16px]">
          Add New Design
        </span>
      </div>

      <label
        htmlFor="test-card-access-token"
        className="mt-[28px] flex items-center justify-between text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        <span>Personal Access Token</span>
        <FiInfo aria-hidden="true" size={15} />
      </label>
      <input
        id="test-card-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
      />

      <label
        htmlFor="test-card-design-url"
        className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        <span>Design URL</span>
        <FiInfo aria-hidden="true" size={15} />
      </label>
      <input
        id="test-card-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-2 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-end gap-4">
        <button
          type="button"
          className="h-9 w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-auto pb-[62px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
