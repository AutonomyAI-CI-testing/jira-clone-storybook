/**
 * TestCard — a standalone, prop-less smoke-test component.
 *
 * It reproduces the attached Figma settings panel closely enough to be
 * recognised on screen. Colours, spacing and typography are deliberately
 * approximate defaults read off the frame image: no style guide or exported
 * assets were available, so nothing here should be treated as the design's own
 * values.
 *
 * Self-contained on purpose — arbitrary colour values only (this repo replaces
 * Tailwind's palette, so `bg-gray-900` and friends do not exist), no props, no
 * state, no handlers, and no imports.
 */

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.7 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.7a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.3 9v.09A1.7 1.7 0 0 0 20.86 10H21a2 2 0 1 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
  </svg>
);

const ChevronUpIcon = ({ className = "h-4 w-4" }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <span
    className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#c9c9c9] text-[10px] leading-none text-[#c9c9c9]"
    aria-hidden="true"
  >
    i
  </span>
);

const Label = ({ children }: { children: string }): JSX.Element => (
  <span className="flex items-center gap-2 text-sm text-[#c9c9c9]">
    {children}
    <InfoIcon />
  </span>
);

export default function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-[320px] min-h-[640px] flex-col rounded-xl bg-[#1e1e1e] p-6 text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#f5f5f5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#a8a8a8]">
        <ChevronUpIcon />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-16 flex items-center gap-2 text-lg font-semibold text-[#f5f5f5]">
        <ChevronUpIcon className="h-5 w-5" />
        Add New Design
      </h2>

      <div className="mt-6 flex flex-col gap-2">
        <Label>Personal Access Token</Label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="h-11 w-full rounded-md border border-[#4a4a4a] bg-[#2b2b2b] px-3 text-sm text-[#d0d0d0] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <Label>Design URL</Label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="h-11 w-full rounded-md border border-[#4a4a4a] bg-[#2b2b2b] px-3 text-sm text-[#d0d0d0] placeholder:text-[#8a8a8a]"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a83f1c] px-6 py-3 text-[#f0dcd2]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#a83f1c] px-6 py-3 text-[#f0dcd2]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 text-lg font-semibold text-[#f5f5f5]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
