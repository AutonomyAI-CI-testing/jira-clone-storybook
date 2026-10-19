const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GearIcon = () => (
  <svg {...iconProps} className="h-6 w-6 shrink-0">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg {...iconProps} className="h-5 w-5 shrink-0">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg {...iconProps} className="h-[18px] w-[18px] shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ placeholder }: { placeholder: string }) => (
  <div className="mt-3 flex h-[70px] items-center rounded border-2 border-[#8f8f8f] bg-[#2b2b2b] px-8 text-[17px] text-[#8f8f8f]">
    {placeholder}
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 py-8 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-10 flex items-center gap-2 text-[#8f8f8f]">
      <ChevronUpIcon />
      <span className="truncate text-[15px]">From entire frame to a singl…</span>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <span className="font-primary-bold text-[17px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <Field placeholder="figd_xxxxxxxxxxxxxxxxxxxxx" />

    <div className="mt-7 flex items-center gap-2">
      <span className="font-primary-bold text-[17px]">Design URL</span>
      <InfoIcon />
    </div>
    <Field placeholder="https://www.figma.com/file/" />

    <div className="mt-14 flex justify-end gap-[34px]">
      <button
        type="button"
        className="h-[70px] w-[170px] rounded-md bg-[#8a3d12] text-xl"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[70px] w-[170px] rounded-md bg-[#8a3d12] text-xl"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
