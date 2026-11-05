/**
 * TestCard — a self-contained smoke-test component.
 *
 * Reproduces one cropped Figma frame: a dark "UI magician Agent" panel with an
 * "Add New Design" form (Personal Access Token + Design URL) above a "Recent
 * Breakdowns" heading. Takes no props, holds no state and is wired to nothing —
 * spacing, colour and type are approximations read off the frame image, not
 * measured design values.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[#0d0d0d] px-10 py-6 text-[#e6e6e6]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl leading-6">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-6 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-base text-[#c9c9c9]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-32 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl leading-6">Add New Design</h2>
      </div>

      <FieldLabel label="Personal Access Token" />
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border-2 border-[#6e6e6e] bg-[#2b2b2b] px-4 py-3 text-base text-[#e6e6e6] placeholder:text-[#8f8f8f] focus:outline-none"
      />

      <FieldLabel label="Design URL" className="mt-6" />
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border-2 border-[#6e6e6e] bg-[#2b2b2b] px-4 py-3 text-base text-[#e6e6e6] placeholder:text-[#8f8f8f] focus:outline-none"
      />

      {/* Actions */}
      <div className="mt-10 flex gap-9">
        <button
          type="button"
          className="rounded-lg bg-[#a63c11] px-10 py-3.5 text-base text-[#c4b0a7]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#a63c11] px-10 py-3.5 text-base text-[#c4b0a7]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-20 font-primary-bold text-xl leading-6">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const FieldLabel = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => (
  <div className={`mt-8 flex items-center gap-3 ${className}`}>
    <span className="text-base text-[#c9c9c9]">{label}</span>
    <InfoIcon />
  </div>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0 text-[#c9c9c9]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-[#c9c9c9]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] shrink-0 text-[#c9c9c9]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
