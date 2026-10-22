const ACTIONS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3.25v2.5M12 18.25v2.5M20.75 12h-2.5M5.75 12h-2.5M18.19 5.81l-1.77 1.77M7.58 16.42l-1.77 1.77M18.19 18.19l-1.77-1.77M7.58 7.58 5.81 5.81" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M4.5 12.5 10 7l5.5 5.5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="8.25" />
    <path d="M10 9.25v4.5" />
    <circle cx="10" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-4">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[17px] text-[#c8c8c8]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-md border border-[#8a8a8a] bg-[#1e1e1e] px-4 py-4 text-[16px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-screen w-[508px] flex-col bg-[#1e1e1e] px-10 pt-8 pb-10 font-primary text-[#c8c8c8]"
  >
    <header className="flex items-start justify-between">
      <h1 className="text-[26px] leading-9 text-[#d6d6d6]">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="text-[#d6d6d6]">
        <GearIcon />
      </button>
    </header>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate text-[17px] text-[#c8c8c8]">
        From entire frame to a singl…
      </span>
    </div>

    <h2 className="mt-[150px] flex items-center gap-3 font-primary-bold text-[24px] text-[#e8e8e8]">
      <ChevronUpIcon />
      Add New Design
    </h2>

    <div className="mt-9">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-9 pl-[50px]">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[170px] rounded-lg bg-[#9c3d10] py-5 text-[20px] text-[#cfcfcf]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-bold text-[24px] text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);
