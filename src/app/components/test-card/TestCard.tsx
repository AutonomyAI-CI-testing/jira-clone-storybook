const ChevronUp = () => (
  <svg
    className="h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    className="h-6 w-6 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-5 w-5 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[17px] text-[#e8e6e3]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className="mt-4 h-[78px] w-full rounded border border-[#7a7a7a] bg-[#232323] px-4 text-base text-[#e8e6e3] outline-none placeholder:text-[#8f8a85]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-10 pb-16 pt-12 font-primary-light text-[#e8e6e3]"
  >
    <div className="flex items-center justify-between gap-4">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-12 flex items-center gap-4 text-[#b3b0ad]">
      <ChevronUp />
      <span className="truncate text-[17px]">From entire frame to a singl...</span>
    </div>

    <div className="h-40" />

    <h2 className="flex items-center gap-3 font-primary-bold text-[22px]">
      <ChevronUp />
      Add New Design
    </h2>

    <div className="mt-14 space-y-6">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex justify-end gap-9">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[72px] w-[170px] rounded-lg bg-[#a84e1e] font-primary text-lg text-[#7b6a5e]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-bold text-[22px]">Recent Breakdowns</h2>
  </div>
);
