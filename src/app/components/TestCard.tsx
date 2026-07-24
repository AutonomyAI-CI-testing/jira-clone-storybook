const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6.5 1.5h3l.3 1.4a4.5 4.5 0 0 1 1.2.7l1.3-.6 1.5 1.5-.6 1.3c.3.4.5.8.7 1.2l1.4.3v3l-1.4.3a4.5 4.5 0 0 1-.7 1.2l.6 1.3-1.5 1.5-1.3-.6a4.5 4.5 0 0 1-1.2.7l-.3 1.4h-3l-.3-1.4a4.5 4.5 0 0 1-1.2-.7l-1.3.6-1.5-1.5.6-1.3a4.5 4.5 0 0 1-.7-1.2L1.5 9.5v-3l1.4-.3c.2-.4.4-.8.7-1.2l-.6-1.3L4.5 2.2l1.3.6c.4-.3.8-.5 1.2-.7L6.5 1.5Z"
      stroke="#A5ADAD"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="2" stroke="#A5ADAD" strokeWidth="1.2" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 6.5 6 1.5l5 5" stroke="#A5ADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6" stroke="#A5ADAD" strokeWidth="1.2" />
    <path d="M7 6v4" stroke="#A5ADAD" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7" cy="4" r="0.8" fill="#A5ADAD" />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="box-border flex w-[280px] flex-col gap-5 bg-[#1C1D17] px-5 py-5 text-[#D3D3D3]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-base font-medium leading-tight text-[#E8E8E3]">UI magician Agent</h1>
        <button type="button" className="flex h-6 w-6 items-center justify-center" aria-label="Settings">
          <GearIcon />
        </button>
      </div>

      {/* Collapsed section */}
      <button type="button" className="flex items-center gap-2 text-left text-sm text-[#A5ADAD]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Expanded: Add New Design */}
      <div className="flex flex-col gap-4">
        <button type="button" className="flex items-center gap-2 text-left text-sm font-medium text-[#D3D3D3]">
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#D3D3D3]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="h-9 w-full rounded-none border border-[#A5ADAD] bg-[#272822] px-3 text-sm text-[#A5ADAD] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#D3D3D3]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="h-9 w-full rounded-none border-2 border-[#929291] bg-[#272822] px-3 text-sm text-[#A5ADAD] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 pt-1">
          <button
            type="button"
            className="h-9 min-w-[85px] rounded-md bg-[#843A17] px-4 text-sm font-medium text-[#D3B8A5]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-9 min-w-[85px] rounded-md bg-[#843A17] px-4 text-sm font-medium text-[#D3B8A5]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-2">
        <h2 className="text-sm font-medium text-[#D3D3D3]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
