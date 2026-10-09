import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component reproducing the supplied Figma frame.
 * Self-contained: no props, no state, no data fetching.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] px-5 pb-16 pt-5 font-[Inter,system-ui,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings aria-hidden className="text-[16px] text-[#b5b5b5]" />
      </div>

      {/* Collapsed frame row */}
      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp
          aria-hidden
          className="shrink-0 text-[10px] text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[75px] flex items-center gap-3">
        <FiChevronUp
          aria-hidden
          className="shrink-0 text-[12px] text-[#b2b2b1]"
        />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <label
        htmlFor="testElem-token"
        className="mt-7 flex items-center gap-2"
      >
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo aria-hidden className="text-[15px] text-[#a4a4a3]" />
      </label>
      <input
        id="testElem-token"
        name="token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <label htmlFor="testElem-url" className="mt-[10px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo aria-hidden className="text-[15px] text-[#a3a3a2]" />
      </label>
      <input
        id="testElem-url"
        name="designUrl"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

export default TestCard;
