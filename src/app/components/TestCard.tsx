export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-[520px] w-full max-w-md bg-[#1e1e1e] px-6 py-6 text-white"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight text-zinc-100">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-zinc-400 hover:text-zinc-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </div>

      {/* Collapsible summary row */}
      <button
        type="button"
        className="mb-8 flex items-center gap-2 text-sm text-[#c17a4a]"
      >
        <span className="text-xs leading-none">⌃</span>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-sm text-zinc-300">⌃</span>
        <h2 className="text-base font-medium text-zinc-200">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-zinc-300">Personal Access Token</label>
          <span
            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-500 text-[10px] text-zinc-400"
            aria-hidden
          >
            i
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-zinc-500 bg-[#2a2a2a] px-3 py-2.5 text-sm text-zinc-300 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-sm text-zinc-300">Design URL</label>
          <span
            className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-500 text-[10px] text-zinc-400"
            aria-hidden
          >
            i
          </span>
        </div>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded border border-zinc-400 bg-[#2a2a2a] px-3 py-2.5 text-sm text-zinc-300 outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mb-10 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-md bg-[#b5531f] px-8 py-2.5 text-sm font-medium text-zinc-200"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#b5531f] px-8 py-2.5 text-sm font-medium text-zinc-200"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-base font-medium text-zinc-200">Recent Breakdowns</h3>
    </div>
  );
}

export default TestCard;
