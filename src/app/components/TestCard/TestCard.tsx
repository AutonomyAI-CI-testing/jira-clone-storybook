import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a self-contained, no-props smoke-test component.
 *
 * Recreates the dark settings panel from the attached Figma frame. Colors and
 * spacing use the frame's literal values via Tailwind arbitrary classes on
 * purpose: the frame comes from an unrelated dark app, so its palette
 * deliberately does not map onto this repo's semantic design tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black font-[Inter,sans-serif]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings
          className="h-4 w-4 text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed hint row */}
      <div className="flex items-center gap-2 px-5 pt-3">
        <FiChevronUp className="h-2 w-2 text-[#8b9291]" aria-hidden="true" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 px-5 pt-8">
        <FiChevronUp className="h-3 w-3 text-[#b2b2b1]" aria-hidden="true" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 px-5 pt-5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo className="h-[15px] w-[15px] text-[#a4a4a3]" aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mx-5 mt-2 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 px-5 pt-3">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo className="h-[15px] w-[15px] text-[#a3a3a2]" aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mx-5 mt-2 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      {/* Actions */}
      <div className="flex items-center justify-center gap-4 px-5 pt-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 px-5 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
