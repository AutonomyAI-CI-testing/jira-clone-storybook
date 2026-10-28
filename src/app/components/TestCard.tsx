/**
 * TestCard
 *
 * A self-contained smoke-test component: it reproduces the panel from the
 * "Test Page - Simple" Figma frame, takes no props and holds no state.
 *
 * Styling note: the frame is a fixed dark surface, so its greys and oranges are
 * written as arbitrary values. `tailwind.config.js` replaces `theme.colors` with
 * semantic tokens only, and none of them describe this surface.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] font-primary text-[#9e9e9e]"
    >
      <div className="flex items-center justify-between px-10 pt-9 pb-6">
        <h1 className="font-primary-black text-2xl leading-none text-[#f2f2f2]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <button
        type="button"
        className="flex w-full items-center gap-4 border-b border-[#3d3d3d] px-10 pb-7 text-left"
      >
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e6e6e6]" />
        <span className="font-primary-light text-xl leading-none text-[#9e9e9e]">
          From entire frame to a singl…
        </span>
      </button>

      <section className="px-10 pt-[150px]">
        <h2 className="flex items-center gap-3 font-primary-black text-2xl leading-none text-[#f2f2f2]">
          <ChevronUpIcon className="h-6 w-6 shrink-0" />
          Add New Design
        </h2>

        <div className="mt-14">
          <FieldLabel htmlFor="test-card-token" label="Personal Access Token" />
          <input
            id="test-card-token"
            aria-label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
            className="mt-3 w-full rounded-[2px] border border-[#5c5c5c] bg-[#262626] px-5 py-5 font-primary-light text-base text-[#c7c7c7] outline-none placeholder:text-[#8a8a8a]"
          />
        </div>

        <div className="mt-9">
          <FieldLabel htmlFor="test-card-url" label="Design URL" />
          <input
            id="test-card-url"
            aria-label="Design URL"
            placeholder="https://www.figma.com/file/"
            className="mt-3 w-full rounded-[2px] border border-[#5c5c5c] bg-[#262626] px-5 py-5 font-primary-light text-base text-[#c7c7c7] outline-none placeholder:text-[#8a8a8a]"
          />
        </div>

        <div className="mt-12 flex gap-9">
          <button
            type="button"
            className="rounded-[6px] bg-[#b04a1f] px-10 py-4 font-primary-bold text-xl text-[#d3c3bb] hover:bg-[#c05426]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-[6px] bg-[#b04a1f] px-10 py-4 font-primary-bold text-xl text-[#d3c3bb] hover:bg-[#c05426]"
          >
            Prepare
          </button>
        </div>
      </section>

      <h2 className="px-10 pt-[60px] pb-8 font-primary-black text-2xl leading-none text-[#f2f2f2]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

function FieldLabel({ htmlFor, label }: { htmlFor: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor={htmlFor}
        className="font-primary text-xl leading-none text-[#9e9e9e]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
  );
}

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className="h-6 w-6 shrink-0 text-[#e6e6e6]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="2.4" />
      <path d="M8 1.4v2M8 12.6v2M1.4 8h2M12.6 8h2M3.3 3.3l1.4 1.4M11.3 11.3l1.4 1.4M12.7 3.3l-1.4 1.4M4.7 11.3l-1.4 1.4" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className="h-5 w-5 shrink-0 text-[#e6e6e6]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.4" />
      <path d="M8 7.3v4.2" />
      <path d="M8 4.6h.01" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 10.5 8 6l4.5 4.5" />
    </svg>
  );
}
