import { useId } from "react";

/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma panel.
 *
 * Self-contained and inert — no props, no state, no handlers. The design's own
 * palette is used as literal values because none of the semantic tokens (or raw
 * ramps) in src/app/styles/app.css match it; every one of these colours sits
 * nearest to a token that is a visibly different shade. Keep these literals
 * inside this file only.
 */
export const TestCard = () => {
  const fieldId = useId();

  return (
    <div
      id="testElem"
      className="flex w-[254px] shrink-0 flex-col bg-[#1c1c1c] pb-[62px] pl-[20px] pr-[24px] pt-[20px] font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <span className="shrink-0 text-[#cfcfcf]" aria-hidden="true">
          <SettingsGlyph />
        </span>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <span className="text-[#a8aead]" aria-hidden="true">
          <ChevronSmall />
        </span>
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <span className="text-[#cfcfcf]" aria-hidden="true">
          <ChevronLarge />
        </span>
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-4">
        <label
          htmlFor={`${fieldId}-token`}
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <span className="text-[#b0b0b0]" aria-hidden="true">
          <InfoGlyph />
        </span>
      </div>
      <input
        id={`${fieldId}-token`}
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />

      <div className="mt-[11px] flex items-center gap-4">
        <label
          htmlFor={`${fieldId}-url`}
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <span className="text-[#b0b0b0]" aria-hidden="true">
          <InfoGlyph />
        </span>
      </div>
      <input
        id={`${fieldId}-url`}
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
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

const SettingsGlyph = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" />
  </svg>
);

const ChevronLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 6.5L6 2L10.5 6.5" />
  </svg>
);

const InfoGlyph = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.9v4.1" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
