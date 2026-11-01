/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * frame. Presentational only: no props, no state, no data.
 *
 * The panel keeps its own dark palette because it is a standalone design from
 * another product — the app's semantic tokens have no equivalent for its dark
 * surface or its rust accent.
 */

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 py-10 font-primary text-[#c8c8c8]"
    >
      {/* Title */}
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="shrink-0 cursor-pointer text-[#c9c9c9] hover:text-white"
        >
          <GearIcon className="h-7 w-7" />
        </button>
      </div>

      {/* Collapsible summary row */}
      <div className="mt-12 flex items-center gap-4">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#c9c9c9]" />
        <span className="truncate text-[17px] text-[#b0b0b0]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-36 flex items-center gap-4">
        <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#cccccc]" />
        <h2 className="font-primary-bold text-[22px] text-[#cccccc]">
          Add New Design
        </h2>
      </div>

      <div className="mt-14 flex flex-col gap-7">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      {/* Actions */}
      <div className="mt-10 flex gap-9">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-36 font-primary-bold text-[22px] text-[#cccccc]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-4">
        <label htmlFor={id} className="text-[17px] text-[#c0c0c0]">
          {label}
        </label>
        <InfoIcon className="h-[22px] w-[22px] shrink-0 text-[#c0c0c0]" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-[18px] h-14 w-full rounded-md border border-[#5a5a5a] bg-[#2b2b2b] px-[30px] text-[18px] text-[#d0d0d0] placeholder:text-[#8f8f8f]"
      />
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="h-14 w-[170px] cursor-pointer rounded-lg bg-[#a03c0d] text-[18px] text-[#c9c9c9] hover:bg-[#b2450f] active:bg-[#8d3409]"
    >
      {children}
    </button>
  );
}

function GearIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="More information"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
