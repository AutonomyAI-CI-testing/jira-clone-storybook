const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-7 w-7 shrink-0"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.25v5" strokeLinecap="round" />
    <circle cx="12" cy="7.75" r="1.1" fill="currentColor" stroke="none" />
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
  <div>
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-[16px] text-[#c9c9c9]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full border border-[#6b6b6b] bg-[#1f1f1f] px-5 py-5 font-primary-light text-[16px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="min-w-[170px] rounded bg-[#a03c16] px-8 py-5 font-primary-light text-[18px] text-[#d9d9d9]"
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#171717] p-10 font-primary-light text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[24px] text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[17px]">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-16">
        <div className="flex items-center gap-3">
          <ChevronUpIcon />
          <h2 className="font-primary-bold text-[26px] text-[#d9d9d9]">
            Add New Design
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          <Field
            id="testElem-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="testElem-design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-12 flex justify-center gap-9">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-[24px] text-[#d9d9d9]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
