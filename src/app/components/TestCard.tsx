export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="text-[11.5px]">From entire frame to a singl...</span>
      </div>

      <section className="mt-20">
        <div className="mb-3 flex items-center gap-2 text-[#b2b2b1]">
          <ChevronUpIcon />
          <h2 className="text-[13.5px] font-semibold">Add New Design</h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/"
          variant="strong"
        />

        <div className="mt-6 flex gap-[17px]">
          <button type="button" className={rustButtonClassName}>
            Awesome
          </button>
          <button type="button" className={rustButtonClassName}>
            Prepare
          </button>
        </div>
      </section>

      <h2 className="mt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const rustButtonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#c9c4c0]";

const Field = ({
  label,
  placeholder,
  variant = "default",
}: {
  label: string;
  placeholder: string;
  variant?: "default" | "strong";
}): JSX.Element => {
  return (
    <div className="mt-7">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">{label}</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={`h-9 w-[211px] rounded-[2px] bg-[#272822] px-3 font-[monospace] text-[11.5px] text-[#b5b5b5] outline-none placeholder:text-[#737470] ${
          variant === "strong" ? "border-2 border-[#929291]" : "border border-[#a5adad]"
        }`}
      />
    </div>
  );
};

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75v.5" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.1 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03z" />
  </svg>
);
