// Smoke-test card reproducing the "UI magician Agent" panel from the attached
// Figma frame. Self-contained: no props, no state, nothing interactive.

const CHEVRON_UP_PATH = "M0.6 4.2 4 1l3.4 3.2";

// Six-tooth cog outline drawn on a 16x16 grid.
const GEAR_PATH =
  "M9.81 3.02 9.22 1.11A7 7 0 0 0 6.78 1.11L6.19 3.02A5.3 5.3 0 0 0 4.59 3.94L2.64 3.5A7 7 0 0 0 1.42 5.61L2.78 7.08A5.3 5.3 0 0 0 2.78 8.92L1.42 10.39A7 7 0 0 0 2.64 12.5L4.59 12.06A5.3 5.3 0 0 0 6.19 12.98L6.78 14.89A7 7 0 0 0 9.22 14.89L9.81 12.98A5.3 5.3 0 0 0 11.41 12.06L13.36 12.5A7 7 0 0 0 14.58 10.39L13.22 8.92A5.3 5.3 0 0 0 13.22 7.08L14.58 5.61A7 7 0 0 0 13.36 3.5L11.41 3.94A5.3 5.3 0 0 0 9.81 3.02Z";

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 8 5" fill="none" aria-hidden="true" className={className}>
    <path
      d={CHEVRON_UP_PATH}
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path
      d={GEAR_PATH}
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#181818] px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsIcon className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[14px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="test-card-token"
      className="mt-[28px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      Personal Access Token
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-url"
      className="mt-[11px] flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
    >
      Design URL
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </label>
    <input
      id="test-card-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px] pr-[3px]">
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

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
