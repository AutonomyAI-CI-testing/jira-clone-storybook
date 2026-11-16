/**
 * TestCard — a self-contained, no-prop card used as a smoke test.
 *
 * It reproduces the attached Figma frame ("UI magician Agent" panel) and is
 * deliberately outside the app's semantic token system: the frame is a dark,
 * third-party UI whose rust action buttons have no equivalent in the six
 * themes, so the palette is written as literal values. Approximate fidelity
 * was explicitly requested for this smoke test.
 */

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 3.9 15a1.7 1.7 0 0 0-1.56-1.03H2.2a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 3.9 8.86a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H8.3A1.7 1.7 0 0 0 9.33 2.94V2.84a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.05A1.7 1.7 0 0 0 20.28 9.9h.1a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.56 1.03z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
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
  <div className="mt-12">
    <div className="flex items-center gap-3">
      <label className="font-primary text-base text-[#d6d6d6]" htmlFor={id}>
        {label}
      </label>
      <InfoIcon className="h-5 w-5 text-[#c4c4c4]" />
    </div>
    <input
      className="mt-4 h-[70px] w-full rounded-sm border border-[#6f6f6f] bg-[#2b2b2b] px-6 font-primary text-base text-[#e6e6e6] outline-none placeholder:text-[#8a8a8a]"
      id={id}
      placeholder={placeholder}
      readOnly
      type="text"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    className="h-[72px] w-[173px] rounded-md bg-[#a8451f] font-primary-bold text-lg text-[#cccccc]"
    type="button"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    className="w-[508px] overflow-hidden rounded-lg bg-[#1e1e1e] p-10"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[#f2f2f2]">
        UI magician Agent
      </h2>
      <GearIcon className="h-7 w-7 text-[#e6e6e6]" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#8f8f8f]">
      <ChevronUpIcon className="h-5 w-5" />
      <span className="font-primary text-[17px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-6 w-6 text-[#d6d6d6]" />
      <h3 className="font-primary-bold text-xl text-[#e6e6e6]">
        Add New Design
      </h3>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-16 flex gap-8">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="mt-20 font-primary-bold text-xl text-[#8f8f8f]">
      Recent Breakdowns
    </h3>
  </div>
);
