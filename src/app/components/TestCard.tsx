const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M19.4 13.5v-3l1.6-1.2-1.5-2.6-2 .5a7.2 7.2 0 0 0-1.7-1l-.4-2h-3l-.4 2a7.2 7.2 0 0 0-1.7 1l-2-.5-1.5 2.6L4.6 10.5v3l-1.6 1.2 1.5 2.6 2-.5c.5.4 1.1.7 1.7 1l.4 2h3l.4-2c.6-.3 1.2-.6 1.7-1l2 .5 1.5-2.6-1.6-1.2Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6 14.5 12 8.5l6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 10.5v6M12 7.5h.01"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="mx-auto w-full max-w-[420px] rounded-md bg-[#1c1c1c] px-8 py-8 text-[#d4d4d4]"
    >
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-[22px] font-medium leading-tight text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#b0b0b0] hover:text-white"
        >
          <GearIcon />
        </button>
      </header>

      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[15px] text-[#c8c8c8]"
      >
        <span className="text-[#a8a8a8]">
          <ChevronUpIcon />
        </span>
        <span className="truncate">From entire frame to a singl…</span>
      </button>

      <section className="mb-12">
        <div className="mb-6 flex items-center gap-2 text-[18px] font-medium text-[#e0e0e0]">
          <span className="text-[#a8a8a8]">
            <ChevronUpIcon />
          </span>
          <span>Add New Design</span>
        </div>

        <label className="mb-2 flex items-center gap-2 text-[15px] text-[#d0d0d0]">
          <span>Personal Access Token</span>
          <span className="text-[#9a9a9a]" aria-hidden="true">
            <InfoIcon />
          </span>
        </label>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxx"
          aria-label="Personal Access Token"
          className="mb-5 w-full rounded border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c0c0c0] outline-none"
        />

        <label className="mb-2 flex items-center gap-2 text-[15px] text-[#d0d0d0]">
          <span>Design URL</span>
          <span className="text-[#9a9a9a]" aria-hidden="true">
            <InfoIcon />
          </span>
        </label>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          aria-label="Design URL"
          className="mb-6 w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-[14px] text-[#c0c0c0] outline-none"
        />

        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a5522a] px-6 py-2.5 text-[15px] font-medium text-[#e8c4b0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[120px] rounded-md bg-[#a5522a] px-6 py-2.5 text-[15px] font-medium text-[#e8c4b0]"
          >
            Prepare
          </button>
        </div>
      </section>

      <h2 className="text-[18px] font-medium text-[#e0e0e0]">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
