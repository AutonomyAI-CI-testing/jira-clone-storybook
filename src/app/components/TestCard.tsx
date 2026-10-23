const ChevronUp = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const SettingsIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
  >
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 .8v1.8M8 13.4v1.8M.8 8h1.8M13.4 8h1.8M2.9 2.9l1.3 1.3M11.8 11.8l1.3 1.3M13.1 2.9l-1.3 1.3M4.2 11.8l-1.3 1.3" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="8" cy="8" r="6.4" />
    <path d="M8 7.3v3.9" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r=".75" fill="currentColor" stroke="none" />
  </svg>
);

const FIELD_VARIANTS = {
  token: {
    input: "h-9 border border-[#a5adad] px-[18px]",
    placeholder: "placeholder:text-[#737470]",
  },
  url: {
    input: "h-[37px] border-2 border-[#929291] px-5",
    placeholder: "placeholder:text-[#71726e]",
  },
} as const;

interface FieldProps {
  label: string;
  placeholder: string;
  variant: keyof typeof FIELD_VARIANTS;
  className: string;
}

const Field = ({ label, placeholder, variant, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[11.5px] leading-4 text-[#a4a4a3]">
      <span>{label}</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`mt-2.5 w-full bg-[#272822] text-[11.5px] text-[#b5b5b5] outline-none ${FIELD_VARIANTS[variant].input} ${FIELD_VARIANTS[variant].placeholder}`}
    />
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#0d0d0d] p-1">
    <div className="min-h-[500px] rounded-[10px] bg-[#1b1b1b] px-5 py-5 font-primary">
      <div className="flex items-start justify-between">
        <h2 className="text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-3 text-[11.5px] leading-4 text-[#8b9291]">
        <ChevronUp className="h-[5px] w-2 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[75px] flex items-center gap-3 text-[13.5px] leading-4 text-[#b2b2b1]">
        <ChevronUp className="h-2 w-3 shrink-0" />
        <span>Add New Design</span>
      </div>

      <Field
        className="mt-7"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        variant="token"
      />
      <Field
        className="mt-[11px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        variant="url"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
