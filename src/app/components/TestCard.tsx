/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the attached Figma frame. Smoke test only: no props, no state, no
 * interactivity. Colours come from the repo's semantic tokens; the two the
 * repo has no token for (the button fill and its label) are literals.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-elevation-surface pb-16">
    <div className="px-5 pt-5">
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs text-font">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2.5">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-font-subtle" />
        <span className="truncate font-primary-bold text-2xs text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2.5">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-font" />
        <span className="font-primary-bold text-xs text-font">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        name="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-border-bold bg-background-input px-5 font-primary text-2xs text-font outline-none placeholder:text-font-subtlest"
      />

      <div className="mt-3 flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-2xs text-font-subtle"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        name="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-border-bold bg-background-input px-5 font-primary text-2xs text-font outline-none placeholder:text-font-subtlest"
      />

      <div className="mt-6 flex justify-center gap-4">
        <TestCardButton>Awesome</TestCardButton>
        <TestCardButton>Prepare</TestCardButton>
      </div>

      <h3 className="mt-12 font-primary-bold text-xs text-font">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);

const TestCardButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843A17] font-primary-bold text-2xs text-[#8C8078]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-font"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  className = "",
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 10 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    aria-hidden="true"
    className="shrink-0 text-font-subtlest"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v3.6" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
