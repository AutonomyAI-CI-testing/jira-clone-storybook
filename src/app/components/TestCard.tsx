const SettingsIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#e8e8e8]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#e8e8e8]"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#d4d4d4]"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 16.5v-4.5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-4 flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-[16px] text-[#a3a3a3]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-12 w-full rounded border border-[#5a5a5a] bg-[#242424] px-4 font-primary-light text-[15px] text-[#d4d4d4] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-12 w-[170px] rounded-md bg-[#a34a1e] font-primary text-[16px] text-[#e8e8e8]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary">
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[22px] leading-none text-[#f5f5f5]">
        UI magician Agent
      </h2>
      <SettingsIcon />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate font-primary-light text-[16px] text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon />
      <h3 className="font-primary-bold text-[20px] leading-none text-[#f5f5f5]">
        Add New Design
      </h3>
    </div>

    <div className="mt-16">
      <Field
        id="testElem-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-16 flex gap-8">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h3 className="mt-28 font-primary-bold text-[20px] leading-none text-[#f5f5f5]">
      Recent Breakdowns
    </h3>
  </div>
);
