/**
 * TestCard
 *
 * A standalone reproduction of the "UI magician Agent" panel from the Figma
 * frame (508 x 1016). It is a smoke-test surface: no props, no state and no
 * behaviour, so it is deliberately self-contained and uses fixed values rather
 * than the semantic theme tokens (the design is a fixed dark panel that has no
 * counterpart in this product's six-theme vocabulary).
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FIELD_LABEL = "text-[19px] text-[#c9c9c9]";

const FIELD_INPUT =
  "mt-3 h-[70px] w-full rounded border-2 border-[#8a8a8a] bg-[#242424] px-9 " +
  "text-[19px] text-[#c9c9c9] outline-none placeholder:text-[#6f6f6f]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#191919] px-10 pb-24 pt-10 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[24px] leading-none text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#c9c9c9] outline-none"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-6 flex w-full items-center gap-3 text-[#c9c9c9]">
        <ChevronUpIcon />
        <span className="truncate text-[19px] text-[#a0a0a0]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-3 text-[#c9c9c9]">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[24px] leading-none text-[#d9d9d9]">
          Add New Design
        </h2>
      </div>

      <div className="mt-9">
        <div className="flex items-center gap-7">
          <label htmlFor="test-card-token" className={FIELD_LABEL}>
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={FIELD_INPUT}
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-7">
          <label htmlFor="test-card-url" className={FIELD_LABEL}>
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={FIELD_INPUT}
        />
      </div>

      <div className="mt-12 flex gap-9">
        <button
          type="button"
          className="h-[56px] flex-1 rounded-lg bg-[#a5431d] text-[21px] text-[#b3b3b3] outline-none"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[56px] flex-1 rounded-lg bg-[#a5431d] text-[21px] text-[#b3b3b3] outline-none"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-28 font-primary-bold text-[24px] leading-none text-[#d9d9d9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
