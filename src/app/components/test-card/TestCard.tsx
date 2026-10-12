/**
 * TestCard — a self-contained reproduction of the attached Figma frame.
 *
 * Smoke test only: spacing, colours and typography are approximate (the design's
 * own style guide was not available), and it is not meant to be iterated on.
 *
 * Colours are written as arbitrary Tailwind values rather than palette classes
 * (`bg-neutral-950` and friends) because this repo's tailwind.config.js replaces
 * `theme.colors` wholesale with its own tokens, so the default Tailwind palette
 * generates no CSS. The design is a dark panel, and the repo's semantic tokens
 * resolve to the light theme here, so literal values are used on purpose.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="mx-auto flex min-h-screen w-full max-w-[508px] flex-col gap-5 bg-[#1a1a1a] px-5 py-6 text-[#e6e6e6]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#d0d0d0]"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Truncated collapsible row */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-lg font-semibold text-[#a8a8a8]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-5">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <ChevronUpIcon />
          <span className="text-lg font-semibold text-[#a8a8a8]">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              htmlFor="test-card-token"
              className="text-sm font-medium text-[#c4c4c4]"
            >
              Personal Access Token
            </label>
            <InfoMark />
          </div>
          <input
            id="test-card-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6b6b6b] bg-[#242424] px-3 py-2 text-sm placeholder:text-[#8a8a8a]"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label
              htmlFor="test-card-url"
              className="text-sm font-medium text-[#c4c4c4]"
            >
              Design URL
            </label>
            <InfoMark />
          </div>
          <input
            id="test-card-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="w-full rounded-sm border border-[#6b6b6b] bg-[#242424] px-3 py-2 text-sm placeholder:text-[#8a8a8a]"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-sm bg-[#a6401f] py-2 text-center font-medium text-[#d9d9d9] hover:bg-[#8f3719]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-sm bg-[#a6401f] py-2 text-center font-medium text-[#d9d9d9] hover:bg-[#8f3719]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Bottom section heading */}
      <h2 className="mt-4 text-lg font-semibold text-[#a8a8a8]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[#d0d0d0]"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoMark = () => (
  <span
    aria-hidden="true"
    className="grid size-4 shrink-0 place-items-center rounded-full border border-[#a8a8a8] text-[10px] leading-none text-[#a8a8a8]"
  >
    i
  </span>
);
