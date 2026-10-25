/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" frame.
 *
 * Built as a smoke test of the design -> component -> preview path: it takes no
 * props, imports nothing from the app and is not wired into any route.
 *
 * The two action buttons carry the frame's own colour as a literal: the palette
 * has no rust/amber-brown token, and the frame is the only reference for them.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-9 pt-10 pb-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-lg">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Agent settings"
        className="-mt-1 -mr-1 rounded p-1 text-icon-subtle hover:bg-background-neutral-hovered hover:text-icon active:bg-background-neutral-pressed"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon />
      <span className="min-w-0 truncate text-base">
        From entire frame to a single frame
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="text-lg">Add New Design</span>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-base text-font-subtle">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-border bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-base text-font-subtle">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded border border-border bg-background-input px-4 py-4 text-base text-font placeholder:text-font-subtlest"
      />
    </div>

    <div className="mt-12 flex gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-md bg-[#a8451c] px-8 py-4 text-lg text-font hover:bg-[#8f3a17] active:bg-[#7a3113]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 text-lg">Recent Breakdowns</h2>
  </div>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
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
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
