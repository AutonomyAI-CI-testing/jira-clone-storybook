/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel.
 *
 * Smoke test: layout, colour and type are approximate readings of the Figma frame.
 * It takes no props, holds no state and imports nothing.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pt-10 pb-32 font-primary text-[#d4d4d4]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h2 className="text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center"
      >
        <GearIcon />
      </button>
    </div>

    {/* Collapsed summary row */}
    <div className="mt-9 flex items-center gap-3 font-primary-light text-lg text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    {/* Section header */}
    <div className="mt-40 flex items-center gap-3 text-xl">
      <ChevronUpIcon />
      <span>Add New Design</span>
    </div>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-6"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    {/* Actions */}
    <div className="mt-12 flex items-center justify-end gap-9">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    {/* Section heading */}
    <h2 className="mt-24 text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  className,
  label,
  placeholder,
}: {
  className: string;
  label: string;
  placeholder: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-3 text-lg">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[72px] w-full rounded border border-[#8c8c8c] bg-[#262626] px-4 text-lg text-[#d4d4d4] placeholder:text-[#6b6b6b]"
    />
  </div>
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="w-[168px] rounded-md bg-[#b04a1e] py-5 text-xl text-[#cbcbcb]"
  >
    {label}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5M12 8h.01" />
  </svg>
);
