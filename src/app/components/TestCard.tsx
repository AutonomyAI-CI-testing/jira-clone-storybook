const FIELD_CLASSES =
  "w-full rounded border border-[#8a8a8a] bg-[#2b2b2b] px-6 py-6 text-lg text-[#c9c9c9] placeholder:text-[#8a8a8a]";

const BUTTON_CLASSES =
  "rounded-lg bg-[#8f3d1c] px-8 py-5 font-primary-bold text-lg text-[#cfcfcf]";

const ChevronUpIcon = () => (
  <svg
    width="24"
    height="24"
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

const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="text-lg text-[#c9c9c9]">{label}</span>
      <button
        type="button"
        aria-label={`About ${label}`}
        className="text-[#c9c9c9]"
      >
        <InfoIcon />
      </button>
    </div>
    <input readOnly placeholder={placeholder} className={FIELD_CLASSES} />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[508px] bg-[#1e1e1e] p-12 font-primary">
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-bold text-2xl text-[#d5d5d5]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#d5d5d5]">
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#a3a3a3]">
      <ChevronUpIcon />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-[130px]">
      <div className="flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-2xl text-[#d5d5d5]">
          Add New Design
        </h2>
      </div>

      <div className="mt-8 flex flex-col gap-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-10 flex gap-8">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl text-[#a3a3a3]">
      Recent Breakdowns
    </h2>
  </div>
);
