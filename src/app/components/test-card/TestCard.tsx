/**
 * TestCard — a static, self-contained card built from the Figma frame
 * "Test Page - Simple (FOR TESTING)".
 *
 * Smoke test only: no props, no state, no interaction. It deliberately uses the
 * design's literal colours instead of the app's semantic tokens (see
 * task/PLAN.md), because it is a one-off design-to-code check and must not
 * re-skin with the app theme.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#b5b5b5]"
        >
          <SettingsIcon />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px]">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <input
          id="test-card-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <div className="mb-[11px] flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <input
          id="test-card-url"
          placeholder="https://www.figma.com/file/"
          className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 10 6"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    className={`h-[15px] w-[15px] shrink-0 ${className}`}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

interface IconProps {
  className?: string;
}
