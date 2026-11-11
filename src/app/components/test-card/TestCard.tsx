import cx from "classix";

/**
 * TestCard
 *
 * A static, self-contained reproduction of the "UI magician Agent" panel from
 * the attached Figma frame: a title row with a settings icon, a collapsed
 * "From entire frame to a single component" row, the "Add New Design" section
 * with two labelled fields, a pair of rust-coloured buttons and a
 * "Recent Breakdowns" heading.
 *
 * Takes no props and holds no state — it is a smoke test for the design to
 * component path, so the markup is static and the controls are inert.
 *
 * Styling note: the frame is a dark panel with a rust accent, and neither
 * exists in this repo's semantic token set. The card therefore carries its own
 * values as Tailwind arbitrary-value classes. Stock palette classes such as
 * `bg-gray-800` or `text-slate-300` compile to nothing here, because
 * `tailwind.config.js` replaces `theme.colors` wholesale instead of extending
 * it. Type is still set in the repo's own families.
 */

const FIELD_LABEL_ROW = "flex items-center gap-[14px]";

const FIELD_INPUT =
  "mt-[17px] w-full rounded-[4px] border border-[#7d7d7d] bg-[#2b2b2b] px-10 text-[19px] text-[#c9c9c9] placeholder:text-[#a8a8a8] focus:outline-none";

const ACTION_BUTTON =
  "h-[62px] w-[169px] rounded-[8px] bg-[#a63f1c] font-primary-bold text-[18px] text-[#9c8f88]";

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[26px] w-[26px]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ bold = false }: { bold?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={bold ? 2.6 : 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={bold ? "h-[24px] w-[24px] shrink-0" : "h-[20px] w-[20px] shrink-0"}
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[22px] w-[22px] shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16.5v-5" />
    <path d="M12 8.4h.01" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-10 pt-[46px] pb-[126px] font-primary text-[#dcdcdc]"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[22px] leading-none text-[#dcdcdc]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#c4c4c4] transition-colors hover:text-[#ffffff]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed summary of the selected frame */}
      <div className="mt-[30px] flex items-center gap-[14px]">
        <ChevronUpIcon />
        <span className="truncate text-[17px] text-[#a8a8a8]">
          From entire frame to a single component
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[150px] flex items-center gap-[14px]">
        <ChevronUpIcon bold />
        <h3 className="font-primary-bold text-[20px] leading-none text-[#dcdcdc]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div className={cx(FIELD_LABEL_ROW, "mt-[50px]")}>
        <label htmlFor="testcard-token" className="text-[19px] text-[#c9c9c9]">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testcard-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={cx(FIELD_INPUT, "h-[75px]")}
      />

      {/* Design URL */}
      <div className={cx(FIELD_LABEL_ROW, "mt-[30px]")}>
        <label htmlFor="testcard-url" className="text-[19px] text-[#c9c9c9]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testcard-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={cx(FIELD_INPUT, "h-[70px]")}
      />

      {/* Actions */}
      <div className="mt-[43px] flex justify-center gap-[34px]">
        <button type="button" className={ACTION_BUTTON}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[110px] font-primary-bold text-[20px] leading-none text-[#dcdcdc]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
