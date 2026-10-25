const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    className="h-6 w-6 shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5M12 8h.01" />
  </svg>
);

const fieldClasses =
  "mt-3 h-14 w-full border border-[#9e9e9e] bg-[#161616] px-[38px] font-primary text-lg text-[#c9c9c9] outline-none placeholder:text-[#8a8a8a]";

const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-4">
      <span className="text-lg leading-none">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={fieldClasses}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#0d0d0d] px-10 pb-10 pt-9 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl leading-none text-[#d4d4d4]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="truncate text-lg leading-none">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[150px]" />

    <section>
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-7 w-7" />
        <h2 className="font-primary-black text-2xl leading-none text-[#d4d4d4]">
          Add New Design
        </h2>
      </div>

      <div className="mt-9 space-y-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-9 flex gap-9">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-20 flex-1 rounded-md bg-[#9e4a22] text-xl text-white/60"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-[70px] font-primary-black text-2xl leading-none text-[#d4d4d4]">
      Recent Breakdowns
    </h2>
  </div>
);
