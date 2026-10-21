/**
 * Smoke-test component: a static replica of the "UI magician Agent" panel from
 * the attached Figma frame. It takes no props and is not wired into the app —
 * it exists only so the component can be rendered and previewed.
 *
 * The frame's palette (black ground, olive fields, rust buttons) has no match in
 * the repo's token set, so those values are written as arbitrary Tailwind values
 * here rather than as design tokens.
 */

const ChevronUp = ({ className }: { className: string }) => (
  <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    className="h-[15px] w-[15px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.7v4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.75" fill="currentColor" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-[14px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 pb-8 pt-5 font-primary text-[#b5b5b5]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsible row */}
      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <ChevronUp className="h-[5px] w-2 shrink-0" />
        <span className="text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[86px] flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUp className="h-2 w-3 shrink-0" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-9">
        <div className="flex items-center justify-between text-[#a4a4a3]">
          <span className="text-[11.5px] leading-[13.92px]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-4 pl-6">
        <button
          type="button"
          className="flex-center h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-center h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
