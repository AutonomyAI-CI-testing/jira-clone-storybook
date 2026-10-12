export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col gap-6 bg-[#1a1a1a] p-5 font-primary text-[13px] text-[#d6d6d6]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-base text-[#e8e8e8]">
          UI magician Agent
        </span>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-[#c9c9c9]"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      <div className="flex items-center gap-2 text-[#cfcfcf]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      <div className="flex items-center gap-2">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span className="font-primary-bold text-base text-[#e8e8e8]">
          Add New Design
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span>Personal Access Token</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#9a9a9a]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-[#5a5a5a] bg-[#2b2b2b] px-3 py-2.5 text-[#d6d6d6] placeholder:text-[#8c8c8c] focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span>Design URL</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#9a9a9a]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-md border border-[#5a5a5a] bg-[#2b2b2b] px-3 py-2.5 text-[#d6d6d6] placeholder:text-[#8c8c8c] focus:outline-none"
        />
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b3511d] px-4 py-2.5 font-primary-bold text-[#dcb59f]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg bg-[#b3511d] px-4 py-2.5 font-primary-bold text-[#dcb59f]"
        >
          Prepare
        </button>
      </div>

      <div className="font-primary-bold text-base text-[#e8e8e8]">
        Recent Breakdowns
      </div>
    </div>
  );
};
