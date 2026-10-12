const IconGear = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0 text-[#c8c8c8]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);

const IconChevronUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-[#c8c8c8]"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const IconInfo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-5 w-5 shrink-0 text-[#c8c8c8]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.5h.01" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <label className="mt-7 block">
    <span className="flex items-center gap-3">
      <span className="text-[17px] text-[#d0d0d0]">{label}</span>
      <IconInfo />
    </span>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded-md border border-[#6b6b6b] bg-[#232323] px-4 py-3.5 text-[16px] text-[#d8d8d8] outline-none placeholder:text-[#8a8a8a]"
    />
  </label>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="rounded-md bg-[#a8431a] px-7 py-3.5 text-[18px] text-[#e8b49a]"
  >
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[420px] bg-[#1c1c1c] px-10 pb-24 pt-10 font-[system-ui,sans-serif] text-[#c8c8c8]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-[22px] font-bold text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <IconGear />
      </div>

      <div className="mt-7 flex items-center gap-3 text-[17px] text-[#b8b8b8]">
        <IconChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-3">
        <IconChevronUp />
        <h2 className="text-[24px] font-bold text-[#e0e0e0]">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-8 flex gap-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h2 className="mt-20 text-[24px] font-bold text-[#d8d8d8]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
