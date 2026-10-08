/**
 * Smoke-test component built from a Figma frame.
 *
 * Deliberately prop-less and self-contained: this exists only to prove a design
 * can be rendered as a React component in this project. Visual fidelity is
 * approximate on purpose.
 *
 * Colours use arbitrary Tailwind values (`bg-[#1a1a1a]`) because
 * `tailwind.config.js` replaces `theme.colors` with the semantic design tokens,
 * and this design's near-black / rust palette is not part of them. This is a
 * one-off for a throwaway smoke test — not house style.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[380px] space-y-4 bg-[#1a1a1a] p-5 font-primary text-[#e5e5e5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2 pt-2 text-[#9a9a9a]">
        <ChevronUpIcon />
        <span className="truncate font-primary-light text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 pt-6">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label
            htmlFor="personal-access-token"
            className="font-primary-bold text-sm"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 font-primary-light text-sm text-[#e5e5e5] placeholder:text-[#8a8a8a]"
        />
      </div>

      {/* Design URL */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="font-primary-bold text-sm">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded border border-[#4a4a4a] bg-[#1f1f1f] px-3 py-2.5 font-primary-light text-sm text-[#e5e5e5] placeholder:text-[#8a8a8a]"
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 pt-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#a33d1e] py-2.5 font-primary-bold text-[#f0e6e0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#a33d1e] py-2.5 font-primary-bold text-[#f0e6e0]"
        >
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <h3 className="pt-8 font-primary-bold text-xl">Recent Breakdowns</h3>
    </div>
  );
};

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-[#9a9a9a]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);
