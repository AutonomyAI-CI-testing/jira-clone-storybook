/**
 * TestCard — a self-contained smoke-test card that approximates an attached
 * Figma frame. Deliberately standalone: it takes no props, imports nothing,
 * and hardcodes its own approximate colours/sizes rather than using the app's
 * design tokens, so it can render on its own with no app wiring.
 */

const GearIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-[#8A8A8A]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v6" />
    <path d="M12 7.5h.01" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mt-5 flex flex-col gap-2">
    <div className="flex items-center gap-2 text-[15px] text-[#C9C9C9]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      placeholder={placeholder}
      className="w-full rounded border border-[#9A9A9A] bg-transparent px-3 py-3 text-[15px] text-[#D9D9D9] outline-none placeholder:text-[#8A8A8A] focus:border-[#D9D9D9]"
    />
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[52px] w-[130px] rounded-lg bg-[#A03D10] text-[15px] font-semibold text-[#E6D8D0]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#1E1E1E] px-6 py-5 text-[#D9D9D9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[20px] font-semibold text-[#E6E6E6]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[15px] text-[#8A8A8A]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#C9C9C9]" />
      <h2 className="text-[20px] font-bold text-[#F2F2F2]">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

    <div className="mt-8 flex items-center gap-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-12 text-[20px] font-bold text-[#F2F2F2]">
      Recent Breakdowns
    </h2>
  </div>
);
