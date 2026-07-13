export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-neutral-900 px-6 py-8 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        {/* Gear / settings icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* 2. Subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-sm font-semibold text-amber-700">^</span>
        <span className="text-sm text-amber-700">From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-10" />

      {/* 4. Section header */}
      <div className="flex items-center gap-3">
        <span className="text-base font-bold text-white">^</span>
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* 5. Label: Personal Access Token */}
      <div className="mt-6 flex items-center gap-2">
        <span className="text-sm font-semibold text-zinc-200">Personal Access Token</span>
        {/* Info circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Input: Personal Access Token */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
      />

      {/* 6. Label: Design URL */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-sm font-semibold text-zinc-200">Design URL</span>
        {/* Info circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-400"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Input: Design URL */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded border border-zinc-600 bg-zinc-800 px-4 py-3 text-sm text-zinc-400 placeholder-zinc-500 outline-none"
      />

      {/* 7. Button row */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          className="rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 active:bg-orange-800"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-xl bg-orange-700 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 active:bg-orange-800"
        >
          Prepare
        </button>
      </div>

      {/* 8. Footer */}
      <div className="mt-12">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
