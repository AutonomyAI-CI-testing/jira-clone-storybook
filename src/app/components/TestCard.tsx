const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </svg>
);

const ChevronIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={`M1 ${height - 1} ${width / 2} 1 ${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.8v3.4M7.5 4.5h.01" />
  </svg>
);

const Label = ({ htmlFor, children }: { htmlFor: string; children: string }) => (
  <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
    <label htmlFor={htmlFor}>{children}</label>
    <InfoIcon />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1c1c1c] px-5 pb-16 pt-5 text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h2>UI magician Agent</h2>
      <SettingsIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <ChevronIcon width={8} height={5} />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <h3 className="mt-20 flex items-center gap-2 text-[13.5px] text-[#b2b2b1]">
      <ChevronIcon width={12} height={8} />
      Add New Design
    </h3>

    <div className="mt-7">
      <Label htmlFor="personal-access-token">Personal Access Token</Label>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <Label htmlFor="design-url">Design URL</Label>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-6 flex justify-center gap-4">
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

    <h3 className="mt-11 text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</h3>
  </div>
);
