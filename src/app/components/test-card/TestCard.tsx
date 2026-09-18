export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-64 rounded bg-[#1c1917] p-5 font-sans text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#8b9291]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      <button
        type="button"
        className="mt-3 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#8b9291]"
      >
        <svg
          aria-hidden
          viewBox="0 0 12 8"
          className="h-1.5 w-2"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M1 6 6 1l5 5" />
        </svg>
        From entire frame to a singl...
      </button>

      <div className="mt-16">
        <button
          type="button"
          className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#b2b2b1]"
        >
          <svg
            aria-hidden
            viewBox="0 0 12 8"
            className="h-2 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M1 6 6 1l5 5" />
          </svg>
          Add New Design
        </button>

        <label className="mt-6 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
          <svg
            aria-hidden
            viewBox="0 0 15 15"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <path d="M7.5 6.5v4M7.5 4.5h.01" />
          </svg>
        </label>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />

        <label className="mt-4 flex items-center gap-1.5 text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
          <svg
            aria-hidden
            viewBox="0 0 15 15"
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <path d="M7.5 6.5v4M7.5 4.5h.01" />
          </svg>
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />

        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            className="rounded bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded bg-[#843a17] px-5 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-10 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
