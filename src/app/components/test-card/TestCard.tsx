// Smoke-test component: reproduces the "UI magician Agent" panel from the Figma frame.
// Self-contained by design — no props, no state, no external data.
//
// Colour notes:
// - The root is wrapped in the app's own `dark` theme class, so the semantic tokens below
//   resolve to the dark surface/text ramp. That is the repo's dark palette, not a
//   hardcoded one.
// - The two action buttons use a literal rust value. The design's accent is a rust/
//   terracotta with no equivalent in this repo's token set, and the card has to stay a
//   single self-contained file.
import { MdSettings, MdKeyboardArrowUp, MdInfoOutline } from "react-icons/md";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-full max-w-sm space-y-6 rounded-md bg-elevation-surface p-4 text-font"
  >
    {/* 1 — header row */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-lg">UI magician Agent</h2>
      <MdSettings size={20} className="text-icon" />
    </div>

    {/* 2 — collapsed summary row */}
    <div className="flex items-center gap-2 text-sm text-font-subtle">
      <MdKeyboardArrowUp size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* 3 — section header */}
    <div className="flex items-center gap-2 pt-2">
      <MdKeyboardArrowUp size={20} className="shrink-0" />
      <h3 className="font-primary-black text-base">Add New Design</h3>
    </div>

    {/* 4 — personal access token field */}
    <div>
      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="test-card-token">Personal Access Token</label>
        <MdInfoOutline size={18} className="text-icon" />
      </div>
      <input
        id="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-3 py-2 text-sm text-font outline-none placeholder:text-font-subtlest"
      />
    </div>

    {/* 5 — design url field */}
    <div>
      <div className="flex items-center gap-2 text-sm">
        <label htmlFor="test-card-url">Design URL</label>
        <MdInfoOutline size={18} className="text-icon" />
      </div>
      <input
        id="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded-md border border-border-bold bg-background-input px-3 py-2 text-sm text-font outline-none placeholder:text-font-subtlest"
      />
    </div>

    {/* 6 — button row */}
    <div className="flex gap-4 pt-2">
      <button
        type="button"
        className="rounded bg-[#9c4a1e] px-6 py-2 text-white"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#9c4a1e] px-6 py-2 text-white"
      >
        Prepare
      </button>
    </div>

    {/* 7 — bottom heading */}
    <h3 className="pt-2 font-primary-black text-base text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
