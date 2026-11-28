/**
 * TestCard
 *
 * A self-contained render of the "UI magician Agent" Figma frame, built as a
 * pipeline smoke test: it proves a design can be turned into a component that
 * renders in this app.
 *
 * It deliberately takes no props, holds no state and is not wired into the
 * product — no route renders it, and nothing it contains submits anywhere. The
 * two "fields" are static boxes, not form controls. It is rendered once through
 * Storybook so the frame can be seen.
 *
 * The frame's palette is not the app's theme, so the colours below are the
 * frame's own values rather than semantic theme tokens. Treat them as a
 * throwaway, not as a new primitive to build on.
 */

const PANEL_BACKGROUND = "bg-[#1b1b1b]";
const FIELD_BACKGROUND = "bg-[#272822]";

/** The settings gear in the frame's header, drawn on a 16px grid. */
const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="5.4" />
    <path d="M13.4 8h1.6M8 13.4v1.6M2.6 8H1M8 2.6V1" />
    <path d="m11.8 11.8 1.2 1.2M4.2 4.2 3 3M11.8 4.2 13 3M4.2 11.8 3 13" />
    <circle cx="8" cy="8" r="1.8" />
  </svg>
);

/** The collapse chevron, drawn on a 12x8 grid and sized by the caller. */
const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

/** The info marker beside each field label, drawn on a 15px grid. */
const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.6v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className={`flex min-h-[508px] w-[254px] flex-col px-5 py-5 font-primary-bold ${PANEL_BACKGROUND}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      {/* Collapsed summary of the current breakdown */}
      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
        <span className="truncate text-xs">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-[78px] flex items-center gap-[9px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-2 w-3 shrink-0" />
        <span className="text-sm leading-4">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-xs text-[#a4a4a3]">Personal Access Token</span>
        <span className="text-[#a4a4a3]">
          <InfoIcon />
        </span>
      </div>
      <div
        className={`mt-3 flex h-9 w-full items-center border border-[#a5adad] px-[19px] ${FIELD_BACKGROUND}`}
      >
        <span className="truncate text-xs text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-xs text-[#a3a3a2]">Design URL</span>
        <span className="text-[#a3a3a2]">
          <InfoIcon />
        </span>
      </div>
      <div
        className={`mt-3 flex h-9 w-full items-center border-2 border-[#929291] px-5 ${FIELD_BACKGROUND}`}
      >
        <span className="truncate text-2xs text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex items-center justify-end gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-[46px] text-sm leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
