/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the attached Figma frame.
 *
 * Deliberately standalone: no props, no state, no shared design-system
 * primitives. The panel's dark/rust palette is not part of the repo's token
 * contract, so its colours are written as literal values; everything else
 * (type families, radius steps, spacing scale) uses the repo's Tailwind
 * utilities.
 */

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    role="img"
    aria-label="More information"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="text-[16px] leading-none text-[#c9c9c9]"
      >
        {label}
      </label>
      <InfoIcon className="h-5 w-5 shrink-0 text-[#c9c9c9]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 h-16 w-full rounded border border-[#8a8a8a] bg-[#1f1f1f] px-5 text-[18px] text-[#e8e8e8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#191919] p-10 font-primary">
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[22px] leading-tight text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 cursor-pointer text-[#c9c9c9]"
      >
        <SettingsIcon className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <ChevronUpIcon className="h-4 w-4 shrink-0 text-[#c9c9c9]" />
      <span className="truncate text-[16px] text-[#c9c9c9]">
        From entire frame to a single element and everything inside it
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e8e8e8]" />
      <h2 className="font-primary-black text-[24px] leading-tight text-[#e8e8e8]">
        Add New Design
      </h2>
    </div>

    <Field
      id="test-card-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-12 flex gap-9">
      <button
        type="button"
        className="h-14 w-40 cursor-pointer rounded-md bg-[#a34a24] text-[18px] text-[#d9d9d9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-14 w-40 cursor-pointer rounded-md bg-[#a34a24] text-[18px] text-[#d9d9d9]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-[22px] leading-tight text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);
