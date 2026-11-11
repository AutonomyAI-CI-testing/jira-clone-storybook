const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className="h-5 w-5 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="mt-8 block">
    <span className="mb-3 flex items-center gap-3">
      <span className="text-[15px] text-[#b0b0b0]">{label}</span>
      <span className="text-[#b0b0b0]">
        <InfoIcon />
      </span>
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-12 w-full rounded border border-[#5c5c5c] bg-[#2a2a2a] px-4 text-[15px] text-[#c9c9c9] placeholder:text-[#8f8f8f]"
    />
  </label>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-11 py-6 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[#c9c9c9]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="min-w-0 truncate text-[15px] text-[#8a8a8a]">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-16">
      <h2 className="flex items-center gap-3 font-primary-bold text-lg text-[#e3e3e3]">
        <ChevronUpIcon />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />

      <div className="mt-10 flex justify-center gap-9">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="w-[170px] cursor-pointer rounded-lg bg-[#a0482a] px-4 py-5 font-primary-bold text-[#d8d0cc]"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-lg text-[#e3e3e3]">
      Recent Breakdowns
    </h2>
  </div>
);
