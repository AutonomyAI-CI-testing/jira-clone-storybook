import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

/**
 * TestCard displays a configuration card for the UI magician Agent.
 * This is a static component that renders form inputs and action buttons.
 * The inputs are disabled as this is a demonstration/template component.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] rounded bg-[#1a1a14] p-5 text-font">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[13.5px] font-bold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <FiSettings className="h-[24px] w-[24px] text-[#b5b5b5]" />
      </div>

      {/* Subtitle row with chevron icon - truncation intentional for long text */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className="h-[12px] w-[12px] text-[#8b9291]" />
        <p className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section with chevron */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="h-[16px] w-[16px] text-[#b2b2b1]" />
        <p className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </p>
      </div>

      {/* Personal Access Token label with info icon */}
      <div className="mb-3 flex items-center gap-2">
        <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </label>
        <FiInfo className="h-[20px] w-[20px] text-[#a4a4a3]" />
      </div>

      {/* Personal Access Token input field - disabled for template display */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-8 w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder-[#737470]"
        disabled
      />

      {/* Design URL label with info icon */}
      <div className="mb-3 flex items-center gap-2">
        <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </label>
        <FiInfo className="h-[20px] w-[20px] text-[#a3a3a2]" />
      </div>

      {/* Design URL input field - disabled for template display */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-8 w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-2 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder-[#71726e]"
        disabled
      />

      {/* Action buttons row */}
      <div className="mb-12 flex gap-6">
        <button className="flex-1 rounded bg-[#843a17] py-3 text-[13px] font-semibold leading-[15.73px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] py-3 text-[13px] font-semibold leading-[15.73px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section label */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with branding */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
