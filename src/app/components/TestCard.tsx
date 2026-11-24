// Smoke test: reproduces the "UI magician Agent" Figma frame.
// Self-contained on purpose - no props, no state, no data. The frame's own
// colours are used as literals because none of the theme tokens in
// src/app/styles/app.css are a match for them (see task/PLAN.md, decision D3).
// The frame's own font is Inter, which this repo does not ship, so the repo's
// CircularStd weight tokens stand in for it.

const ACTION_BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]";

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.47-.41h-3.85a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg aria-hidden="true" viewBox="0 0 15 15" fill="none" className={className}>
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" strokeWidth="1.2" />
    <path d="M7.5 7v4.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1C1D17] px-5 pb-[62px] pt-5 font-primary text-[#B5B5B5]"
    >
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
          UI magician Agent
        </h2>
        <GearIcon className="h-4 w-3.5 shrink-0 text-[#B5B5B5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8B9291]" />
        <p className="truncate text-[11.5px] leading-[13.92px] text-[#8B9291]">
          From entire frame to a single…
        </p>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#B2B2B1]" />
        <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
          Add New Design
        </h3>
      </div>

      <div className="mt-[28px] flex items-center gap-[22px]">
        <label
          htmlFor="personal-access-token"
          className="text-[11.5px] leading-[13.92px] text-[#A4A4A3]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#A4A4A3]" />
      </div>
      <input
        id="personal-access-token"
        name="personal-access-token"
        type="text"
        autoComplete="off"
        spellCheck={false}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#A5ADAD] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#B5B5B5] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-[22px]">
        <label htmlFor="design-url" className="text-[11.5px] leading-[13.92px] text-[#A3A3A2]">
          Design URL
        </label>
        <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#A3A3A2]" />
      </div>
      <input
        id="design-url"
        name="design-url"
        type="url"
        autoComplete="off"
        spellCheck={false}
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#B5B5B5] placeholder:text-[#71726E]"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
