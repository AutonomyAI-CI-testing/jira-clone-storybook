const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7 shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-4">
    <span className="flex items-center gap-4">
      <span className="font-primary-light text-[19px] text-[#e8e8e8]">
        {label}
      </span>
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[68px] w-full rounded border border-[#5c5c5c] bg-transparent px-6 font-primary-light text-[19px] text-[#f0f0f0] placeholder:text-[#8f8f8f]"
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1a1a1a] px-10 pb-12 pt-8 font-primary text-[#f0f0f0]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-7">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-3 text-[#a3a3a3]">
        <ChevronUpIcon />
        <span className="font-primary-light text-[19px]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-32 flex items-center gap-4">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[26px] leading-8">
          Add New Design
        </h2>
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-12 flex gap-9 pl-12">
        <button
          type="button"
          className="h-[70px] w-[170px] rounded-lg bg-[#9a4218] font-primary-bold text-[19px] text-[#d8c4b8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[70px] w-[170px] rounded-lg bg-[#9a4218] font-primary-bold text-[19px] text-[#d8c4b8]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-20 font-primary-bold text-[26px] leading-8">
        Recent Breakdowns
      </h2>
    </div>
  );
};
