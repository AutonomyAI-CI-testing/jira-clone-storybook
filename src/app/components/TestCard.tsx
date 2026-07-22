/** TestCard — self-contained panel from Figma "UI magician Agent". */
export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[254px] bg-[#1C1D17] px-4 py-5 text-[#D4D4D4] font-sans">
        {/* Header */}
        <div className="mb-4 flex items-start justify-between">
          <h1 className="text-[15px] font-medium leading-tight text-[#E8E8E8]">
            UI magician Agent
          </h1>
          <button type="button" aria-label="Settings" className="mt-0.5 text-[#C8C8C8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M19.4 13a7.6 7.6 0 0 0 .05-2l2.05-1.6-2-3.46-2.45.95a7.7 7.7 0 0 0-1.73-1L15 3h-4l-.32 2.89a7.7 7.7 0 0 0-1.73 1L6.5 5.94l-2 3.46L6.55 11a7.6 7.6 0 0 0 0 2l-2.05 1.6 2 3.46 2.45-.95a7.7 7.7 0 0 0 1.73 1L11 21h4l.32-2.89a7.7 7.7 0 0 0 1.73-1l2.45.95 2-3.46L19.4 13Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Collapsed hint row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-[12px] text-[#B0B0B0]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-6">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[14px] font-medium text-[#CFCFCF]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#C8C8C8]">Personal Access Token</label>
              <InfoIcon />
            </div>
            <div className="rounded-[2px] border border-[#A5ADAD] bg-[#272822] px-3 py-2 text-[12px] text-[#9A9A9A]">
              figd_xxxxxxxxxxxxxxx
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#C8C8C8]">Design URL</label>
              <InfoIcon />
            </div>
            <div className="rounded-[2px] border border-[#A5ADAD] bg-[#272822] px-3 py-2 text-[12px] text-[#9A9A9A]">
              https://www.figma.com/file/:
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[85px] rounded-[4px] bg-[#843A17] px-4 py-2 text-[13px] font-medium text-[#E8C4B0]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[85px] rounded-[4px] bg-[#843A17] px-4 py-2 text-[13px] font-medium text-[#E8C4B0]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-10 text-[14px] text-[#C8C8C8]">Recent Breakdowns</div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden className="shrink-0">
      <path
        d="M1 5L5 1L9 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="text-[#8A8A8A]">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 6.2V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="4.2" r="0.7" fill="currentColor" />
    </svg>
  );
}

export default TestCard;
