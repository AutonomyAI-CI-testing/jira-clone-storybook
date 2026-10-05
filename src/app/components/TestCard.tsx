const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    className="h-5 w-5 shrink-0 text-[#9A9A9A]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.25v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="text-sm text-[#C7C7C7]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-[#7A7A7A] bg-[#2A2A2A] px-4 py-3 text-[#EDEDED] outline-none placeholder:text-[#8A8A8A]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1E1E1E] p-10 font-primary text-[#EDEDED]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-primary-bold">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed disclosure */}
      <div className="mt-6 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-sm text-[#C7C7C7]">
          From entire frame to a singl…
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-16 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="text-lg font-primary-bold">Add New Design</span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field label="Design URL" placeholder="https://www.figma.com/file:" />

      {/* Actions */}
      <div className="mt-8 flex gap-4">
        <button
          type="button"
          className="rounded bg-[#B0531F] px-8 py-3 font-primary-bold text-[#E8DCD4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded bg-[#B0531F] px-8 py-3 font-primary-bold text-[#E8DCD4]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span className="mt-20 text-lg font-primary-bold">Recent Breakdowns</span>
    </div>
  );
};
