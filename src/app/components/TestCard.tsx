/**
 * TestCard
 *
 * A self-contained render of the "UI magician Agent" frame from Figma — a
 * 254x508 dark settings panel. Smoke-test component: it takes no props, reads
 * no data, and is wired into no route or screen.
 *
 * The colours, sizes and offsets below are the values from the frame's style
 * guide, written as Tailwind arbitrary values. `tailwind.config.js` replaces
 * `theme.colors` wholesale, so none of these colours exist as tokens, and the
 * panel belongs to none of the app's themes — see the task plan.
 */

const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[254px] bg-[#171717] font-['Inter',system-ui,sans-serif] font-semibold">
        {/* Light strip across the top of the frame (254x9) */}
        <div className="h-[9px] bg-[#a5adad]" />

        <div className="px-5 pb-[62px]">
          {/* Header */}
          <div className="mt-[11px] flex items-center justify-between text-[#b5b5b5]">
            <h1 className="text-[13.5px] leading-[16.34px]">
              UI magician Agent
            </h1>
            <SettingsIcon />
          </div>

          {/* Collapsed summary row */}
          <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
            <ChevronUp className="h-[5px] w-[8px]" />
            <span className="text-[11.5px] leading-[13.92px]">
              From entire frame to a singl...
            </span>
          </div>

          {/* Add New Design */}
          <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
            <ChevronUp className="h-[8px] w-[12px]" />
            <h2 className="text-[13.5px] leading-[16.34px]">Add New Design</h2>
          </div>

          {/* Personal Access Token */}
          <div className="mt-[26px] flex items-center gap-[23px] text-[#a4a4a3]">
            <span className="text-[11.5px] leading-[13.92px]">
              Personal Access Token
            </span>
            <InfoIcon />
          </div>
          <input
            aria-label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="mt-[13px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
          />

          {/* Design URL */}
          <div className="mt-[9px] flex items-center gap-[18px] text-[#a3a3a2]">
            <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
            <InfoIcon />
          </div>
          <input
            aria-label="Design URL"
            placeholder="https://www.figma.com/file/"
            className="mt-[12px] h-[37px] w-[211px] border border-[#929291] bg-[#272822] px-[20px] text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
          />

          {/* Actions */}
          <div className="mt-[22px] flex gap-[17px] pl-[24px]">
            <button type="button" className={ACTION_BUTTON}>
              Awesome
            </button>
            <button type="button" className={ACTION_BUTTON}>
              Prepare
            </button>
          </div>

          {/* Recent Breakdowns */}
          <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 7 6 1l5 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.1}
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.7" />
    <path d="M7.5 6.9v3.3" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[16px] w-[14px] shrink-0"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1Z" />
  </svg>
);
