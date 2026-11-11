/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * attached Figma frame. Built as a smoke test: no props, no state, no
 * interactivity, and deliberately approximate spacing/colour/type.
 *
 * Colours are written as arbitrary-value Tailwind classes rather than the
 * repo's semantic tokens, because the reference is a near-black panel with
 * rust buttons and neither exists in the token set.
 */

const ChevronUp = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] p-10 font-primary text-[#e0e0e0]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <span className="text-[#c8c8c8]">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed section summary */}
    <div className="mt-8 flex items-center gap-3 text-[#9a9a9a]">
      <ChevronUp />
      <span className="min-w-0 truncate text-sm">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-24 flex items-center gap-3">
      <ChevronUp />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <label className="mt-12 block">
      <span className="flex items-center gap-2 text-sm text-[#d5d5d5]">
        Personal Access Token
        <span className="text-[#c8c8c8]">
          <InfoIcon />
        </span>
      </span>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#232323] px-3 py-3.5 text-sm text-[#d5d5d5] placeholder:text-[#9a9a9a]"
      />
    </label>

    {/* Design URL */}
    <label className="mt-8 block">
      <span className="flex items-center gap-3 text-sm text-[#d5d5d5]">
        Design URL
        <span className="text-[#c8c8c8]">
          <InfoIcon />
        </span>
      </span>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#232323] px-3 py-3.5 text-sm text-[#d5d5d5] placeholder:text-[#9a9a9a]"
      />
    </label>

    {/* Actions */}
    <div className="mt-8 flex gap-9">
      <button
        type="button"
        className="w-[165px] rounded-md bg-[#9a3d1a] py-3.5 text-center text-[#8f8f8f]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[165px] rounded-md bg-[#9a3d1a] py-3.5 text-center text-[#8f8f8f]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
