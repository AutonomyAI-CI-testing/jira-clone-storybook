/**
 * TestCard — a self-contained static panel reproduced from a Figma frame
 * ("UI magician Agent"). Smoke test only: no props, no state, no data.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-10 pb-12 pt-10 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[28px] font-primary-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <p className="text-[19px] text-[#b3b3b3]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Empty band the reference leaves between the summary row and the form. */}
      <div className="h-[140px]" />

      <div className="flex items-center gap-3">
        <ChevronUpIcon size={26} />
        <h2 className="text-[28px] font-primary-bold">Add New Design</h2>
      </div>

      <div className="mt-12">
        <Field
          id="personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-8">
        <Field
          id="design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="mt-10 flex gap-8 pl-12">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-24 text-[26px] font-primary-bold">
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
    <div>
      <div className="flex items-center gap-10">
        <label htmlFor={id} className="text-[19px] text-[#d4d4d4]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-6 h-[72px] w-full rounded-sm border border-[#6f6f6f] bg-[#232323] px-6 text-[19px] text-[#e6e6e6] outline-none placeholder:text-[#8c8c8c]"
      />
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="h-[72px] w-[171px] rounded-lg bg-[#a34a20] text-[21px] text-[#e9a98d]"
    >
      {children}
    </button>
  );
}

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={26}
      height={26}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#c9c9c9]"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-[#d4d4d4]"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
