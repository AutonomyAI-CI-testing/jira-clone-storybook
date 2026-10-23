const GearIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-3">
      <span className="text-xl text-[#d6d6d6]">{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className="h-14 rounded-[4px] border border-[#8b8b8b] bg-[#2b2b2b] px-6 text-xl text-[#e3e3e3] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 pb-16 pt-12 font-primary text-[#e3e3e3]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#e3e3e3]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="truncate text-xl text-[#8f8f8f]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-16 flex flex-col gap-10">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-16 flex justify-center gap-9">
      <button
        type="button"
        className="h-14 min-w-[170px] rounded-[6px] bg-[#9a3f1c] px-6 text-xl text-[#c9c9c9]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-14 min-w-[170px] rounded-[6px] bg-[#9a3f1c] px-6 text-xl text-[#c9c9c9]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl text-[#8f8f8f]">
      Recent Breakdowns
    </h2>
  </div>
);
