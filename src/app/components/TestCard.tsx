const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="#9A9A94"
      strokeWidth="1.5"
    />
    <path
      d="M19.4 13.5a7.6 7.6 0 0 0 .05-1.5 7.6 7.6 0 0 0-.05-1.5l2.05-1.6a.5.5 0 0 0 .12-.64l-1.94-3.36a.5.5 0 0 0-.6-.22l-2.42.97a7.3 7.3 0 0 0-2.6-1.5l-.36-2.57a.5.5 0 0 0-.5-.43h-3.88a.5.5 0 0 0-.5.43l-.36 2.57a7.3 7.3 0 0 0-2.6 1.5l-2.42-.97a.5.5 0 0 0-.6.22L2.43 8.26a.5.5 0 0 0 .12.64L4.6 10.5a7.6 7.6 0 0 0-.05 1.5c0 .5.02 1 .05 1.5l-2.05 1.6a.5.5 0 0 0-.12.64l1.94 3.36a.5.5 0 0 0 .6.22l2.42-.97a7.3 7.3 0 0 0 2.6 1.5l.36 2.57a.5.5 0 0 0 .5.43h3.88a.5.5 0 0 0 .5-.43l.36-2.57a7.3 7.3 0 0 0 2.6-1.5l2.42.97a.5.5 0 0 0 .6-.22l1.94-3.36a.5.5 0 0 0-.12-.64L19.4 13.5Z"
      stroke="#9A9A94"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 14.5 12 8.5l6 6"
      stroke="#9A9A94"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="#6B6B66" strokeWidth="1.5" />
    <path
      d="M12 10.5v6"
      stroke="#6B6B66"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7.5" r="1" fill="#6B6B66" />
  </svg>
);

export default function TestCard() {
  return (
    <div id="testElem">
      <div className="box-border flex w-[254px] flex-col gap-6 bg-[#1C1D17] px-5 py-6 font-sans text-[13px] leading-snug text-[#C8C8C4]">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="m-0 text-[15px] font-medium tracking-tight text-[#E4E4E0]">
              UI magician Agent
            </h1>
            <button
              type="button"
              aria-label="Settings"
              className="flex h-7 w-7 items-center justify-center rounded border-0 bg-transparent p-0"
            >
              <GearIcon />
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 border-0 bg-transparent p-0 text-left text-[13px] text-[#9A9A94]"
          >
            <ChevronUpIcon />
            <span className="truncate">From entire frame to a singl…</span>
          </button>
        </div>

        {/* Add New Design */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center gap-2 border-0 bg-transparent p-0 text-left text-[14px] font-medium text-[#D0D0CC]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[13px] text-[#C8C8C4]">
                <span>Personal Access Token</span>
                <InfoIcon />
              </div>
              <input
                type="text"
                readOnly
                defaultValue="figd_xxxxxxxxxxxxxx"
                className="box-border w-full rounded border border-[#4A4A44] bg-[#252620] px-3 py-2 text-[13px] text-[#9A9A94] outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[13px] text-[#C8C8C4]">
                <span>Design URL</span>
                <InfoIcon />
              </div>
              <input
                type="text"
                readOnly
                defaultValue="https://www.figma.com/file/:"
                className="box-border w-full rounded border-2 border-[#9A9A94] bg-[#252620] px-3 py-2 text-[13px] text-[#B8B8B2] outline-none"
              />
            </div>
          </div>

          <div className="mt-1 flex items-center justify-center gap-3">
            <button
              type="button"
              className="min-w-[96px] rounded-md border-0 bg-[#B4532A] px-5 py-2.5 text-[14px] font-medium text-[#C8A090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[96px] rounded-md border-0 bg-[#B4532A] px-5 py-2.5 text-[14px] font-medium text-[#C8A090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-4">
          <h2 className="m-0 text-[14px] font-medium text-[#D0D0CC]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
