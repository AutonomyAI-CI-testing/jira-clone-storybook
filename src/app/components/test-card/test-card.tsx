import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component displays a form for adding new Figma designs.
 * Features a dark-themed card with collapsible sections, input fields for
 * Personal Access Token and Design URL, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[468px] rounded bg-[#1a1a17] p-10">
      {/* Header with title and settings icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <FiSettings className="h-6 w-6 text-[#b5b5b5]" />
      </div>

      {/* Collapsible description row — chevron indicates expandable content */}
      <div className="mb-20 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 flex-shrink-0 text-[#8b9291]" />
        <p className="text-[16px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section header for adding new designs */}
      <div className="mb-12 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 flex-shrink-0 text-[#b2b2b1]" />
        <h2 className="text-[20px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input with info tooltip */}
      <div className="mb-4 flex items-center gap-1">
        <label
          htmlFor="access-token"
          className="text-[16px] font-semibold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <AiOutlineInfoCircle className="h-5 w-5 text-[#a4a4a3]" />
      </div>
      <input
        id="access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-10 w-full border border-[#929291] bg-[#272822] px-3 py-4 text-[16px] font-semibold leading-[13.92px] text-[#737470] placeholder-[#737470] focus:outline-none"
      />

      {/* Design URL input with info tooltip */}
      <div className="mb-4 flex items-center gap-1">
        <label
          htmlFor="design-url"
          className="text-[16px] font-semibold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <AiOutlineInfoCircle className="h-5 w-5 text-[#a3a3a2]" />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-12 w-full border border-[#a5adad] bg-[#272822] px-3 py-4 text-[16px] font-semibold leading-[12.71px] text-[#71726e] placeholder-[#71726e] focus:outline-none"
      />

      {/* Action buttons for submitting the form */}
      <div className="mb-16 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] py-4 text-[18px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] py-4 text-[18px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent design breakdowns */}
      <h2 className="text-[20px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright information */}
      <div className="mt-4 border-t border-[#3a3a37] pt-3 text-center">
        <p className="text-[14px] text-[#8b9291]">© AutonomyAI</p>
      </div>
    </div>
  );
};
