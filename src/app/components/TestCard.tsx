export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[360px] bg-[#1a1a1a] px-6 py-6 text-[#e5e7eb]"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#e5e7eb]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#9ca3af]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9ca3af]"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      <div className="mb-8">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-base text-[#d1d5db]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </button>

        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#9ca3af]">
            <span>Personal Access Token</span>
            <span
              aria-hidden="true"
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b7280] text-[10px] text-[#9ca3af]"
            >
              i
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#4b5563] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d1d5db] outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 flex items-center gap-2 text-sm text-[#9ca3af]">
            <span>Design URL</span>
            <span
              aria-hidden="true"
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-[#6b7280] text-[10px] text-[#9ca3af]"
            >
              i
            </span>
          </label>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#6b7280] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#d1d5db] outline-none"
          />
        </div>

        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b54a2a] px-6 py-2.5 text-sm text-[#e5e7eb]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b54a2a] px-6 py-2.5 text-sm text-[#e5e7eb]"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="text-base font-normal text-[#d1d5db]">Recent Breakdowns</h2>
    </div>
  );
};
