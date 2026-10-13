const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-3 w-3 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
    <span>{label}</span>
    <InfoIcon />
  </div>
);

const PanelInput = ({
  placeholder,
  borderClassName,
}: {
  placeholder: string;
  borderClassName: string;
}) => (
  <input
    readOnly
    placeholder={placeholder}
    className={`w-full bg-[#272822] px-2 py-[9px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470] ${borderClassName}`}
  />
);

const PanelButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
  >
    {label}
  </button>
);

const SectionHeading = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 font-primary-bold text-[13.5px] text-[#b2b2b1]">
    <ChevronUpIcon />
    <span>{label}</span>
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-black p-5 font-primary">
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <ChevronUpIcon />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-20">
      <SectionHeading label="Add New Design" />
    </div>

    <div className="mt-8">
      <FieldLabel label="Personal Access Token" />
      <div className="mt-3">
        <PanelInput
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClassName="border-2 border-[#929291]"
        />
      </div>
    </div>

    <div className="mt-3">
      <FieldLabel label="Design URL" />
      <div className="mt-3">
        <PanelInput
          placeholder="https://www.figma.com/file/"
          borderClassName="border border-[#a5adad]"
        />
      </div>
    </div>

    <div className="mt-5 flex justify-center gap-4">
      <PanelButton label="Awesome" />
      <PanelButton label="Prepare" />
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
