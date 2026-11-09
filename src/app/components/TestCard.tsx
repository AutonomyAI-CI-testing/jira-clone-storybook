const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="flex items-center gap-4">
      <span className="text-[18px] text-[#d5d5d5]">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-[70px] w-full rounded-md border border-[#5c5c5c] bg-[#2b2b2b] px-9 text-[17px] text-[#d5d5d5] outline-none placeholder:text-[#7d7d7d]"
    />
  </div>
);

const SectionHeader = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <ChevronUpIcon />
    <h2 className="text-[20px] font-primary-bold text-[#d5d5d5]">{children}</h2>
  </div>
);

const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[74px] w-[168px] rounded-lg bg-[#a63d12] text-[20px] text-[#ded7d2]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#131313] px-10 pt-9 pb-16 font-primary text-[#d5d5d5]"
  >
    <div className="flex items-center justify-between text-[#c8c8c8]">
      <h1 className="text-[22px] font-primary-bold">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-7 flex items-center gap-3 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="min-w-0 flex-1 truncate text-[18px]">
        From entire frame to a single component with every state and variant
      </span>
    </div>

    <div className="mt-32">
      <SectionHeader>Add New Design</SectionHeader>
    </div>

    <div className="mt-20">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-12 flex items-center gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-28 text-[20px] font-primary-bold text-[#d5d5d5]">
      Recent Breakdowns
    </h2>
  </div>
);
