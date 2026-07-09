export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen bg-[#2a2a2a] p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-[#aaaaaa]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
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
      </div>

      {/* Chevron + muted orange subtitle */}
      <div className="mt-2 flex items-center gap-1 text-sm text-[#b5703a]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design heading */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 flex-shrink-0 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-[#cccccc]">Personal Access Token</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#888888]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#555555] bg-[#383838] px-3 py-2.5 text-sm text-[#aaaaaa] placeholder-[#888888] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="mb-1.5 flex items-center gap-1.5">
          <span className="text-sm text-[#cccccc]">Design URL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-[#888888]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#555555] bg-[#383838] px-3 py-2.5 text-sm text-[#aaaaaa] placeholder-[#888888] outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-lg bg-[#c1541a] px-8 py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#c1541a] px-8 py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
