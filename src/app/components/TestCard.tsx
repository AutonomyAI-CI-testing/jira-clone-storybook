import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static, self-contained reproduction of one cropped Figma frame: a dark
 * "UI magician Agent" settings panel with two fields and two buttons.
 *
 * It is a smoke test of the design -> component path, so it deliberately
 * carries the frame's own palette as literal values rather than the app's
 * semantic tokens, which are theme-scoped and have no counterpart for this
 * dark ground or its rust buttons.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <FaCog size={14} className="shrink-0 text-[#a5adad]" aria-hidden="true" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FaChevronUp
        size={8}
        className="shrink-0 text-[#8b9291]"
        aria-hidden="true"
      />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FaChevronUp
        size={12}
        className="shrink-0 text-[#b2b2b1]"
        aria-hidden="true"
      />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="testcard-token"
        className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <FaInfoCircle
        size={15}
        className="shrink-0 text-[#a4a4a3]"
        aria-hidden="true"
      />
    </div>
    <input
      id="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] text-[#b5b5b5] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor="testcard-url"
        className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <FaInfoCircle
        size={15}
        className="shrink-0 text-[#a3a3a2]"
        aria-hidden="true"
      />
    </div>
    <input
      id="testcard-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] text-[#b5b5b5] outline-none placeholder:text-[#71726e]"
    />

    <div className="ml-6 mt-5 flex gap-4">
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-11 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
