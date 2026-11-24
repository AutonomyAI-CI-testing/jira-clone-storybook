/**
 * TestCard
 *
 * A static, self-contained reproduction of the supplied Figma frame — the
 * "UI magician Agent" panel. Presentational only: it takes no props, holds no
 * state and wires up no handlers.
 *
 * The frame's colours, type sizes and spacing are applied as Tailwind arbitrary
 * values rather than the app's semantic tokens, because the frame is a dark,
 * out-of-system UI whose palette has no counterpart in the theme contract.
 */

const ICON_COLOR = "text-[#c9c9c9]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="relative w-[254px] bg-black font-[Inter,sans-serif]"
    >
      <div className="absolute inset-x-0 top-0 h-[9px] bg-[#191919]" />

      <div className="px-5 pb-[62px] pt-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
            UI magician Agent
          </span>
          <GearIcon />
        </div>

        {/* Collapsed summary row */}
        <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
          <ChevronUp className={`h-[5px] w-2 ${ICON_COLOR}`} />
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design */}
        <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
          <ChevronUp className={`h-2 w-3 ${ICON_COLOR}`} />
          <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mt-[28px] flex items-center gap-[10px]">
          <label
            htmlFor="test-card-token"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className={`h-[15px] w-[15px] ${ICON_COLOR}`} />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
        />

        {/* Design URL */}
        <div className="mt-[11px] flex items-center gap-[10px]">
          <label
            htmlFor="test-card-design-url"
            className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className={`h-[15px] w-[15px] ${ICON_COLOR}`} />
        </div>
        <input
          id="test-card-design-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
        />

        {/* Actions */}
        <div className="mt-[21px] ml-[23px] flex gap-[17px]">
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

        {/* Footer heading */}
        <h2 className="mt-[48px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden="true"
    className={ICON_COLOR}
  >
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" />
  </svg>
);

const ChevronUp = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.6 6 1.6l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg viewBox="0 0 15 15" fill="none" aria-hidden="true" className={className}>
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.8v3.9"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);
