export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 font-sans text-neutral-300"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-neutral-200">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-neutral-400">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Summary row */}
      <button type="button" className="mb-8 flex w-full items-center gap-2 text-left text-sm text-neutral-400">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="shrink-0 rotate-180">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-8">
        <button type="button" className="mb-5 flex w-full items-center gap-2 text-left text-base text-neutral-300">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
            <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <label className="mb-4 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-neutral-400">
            Personal Access Token
            <InfoIcon />
          </span>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-neutral-600 bg-[#222] px-3 py-2.5 text-sm text-neutral-300 outline-none"
          />
        </label>

        {/* Design URL */}
        <label className="mb-5 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-neutral-400">
            Design URL
            <InfoIcon />
          </span>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-neutral-400 bg-[#222] px-3 py-2.5 text-sm text-neutral-300 outline-none"
          />
        </label>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-sm font-medium text-neutral-200"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-sm font-medium text-neutral-200"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-2">
        <h2 className="text-base text-neutral-300">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-neutral-500" aria-hidden>
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 7v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}
