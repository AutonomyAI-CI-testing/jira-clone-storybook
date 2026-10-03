const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={22}
    height={22}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width={18}
    height={18}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => {
  const id = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor={id} className="text-[17px] text-[#c9c9c9]">
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="h-[68px] w-full rounded-[4px] border border-[#3a3a3a] bg-[#242424] px-4 text-[17px] text-[#e8e8e8] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[64px] rounded-[6px] bg-[#a5441d] text-[17px] text-white"
  >
    {children}
  </button>
);

interface PanelButtonProps {
  children: string;
}

const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1d1d1d] p-10 font-primary-light text-[#e8e8e8]"
    >
      <header className="flex items-center justify-between text-[#c9c9c9]">
        <h1 className="font-primary text-[20px] leading-6 text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <GearIcon />
      </header>

      <div className="mt-5 flex items-center gap-2 text-[#c9c9c9]">
        <ChevronUpIcon />
        <span className="truncate text-[15px] text-[#a8a8a8]">
          From entire frame to a singl...
        </span>
      </div>

      <div aria-hidden="true" className="h-[100px]" />

      <section>
        <div className="flex items-center gap-2 text-[#c9c9c9]">
          <ChevronUpIcon />
          <h2 className="font-primary text-[20px] leading-6 text-[#e8e8e8]">
            Add New Design
          </h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="mt-8 grid grid-cols-2 gap-4">
          <PanelButton>Awesome</PanelButton>
          <PanelButton>Prepare</PanelButton>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-primary text-[20px] leading-6 text-[#e8e8e8]">
          Recent Breakdowns
        </h2>
      </section>
    </div>
  );
};

export default TestCard;
