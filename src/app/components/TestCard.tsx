const fieldClassName =
  "mt-3 w-full rounded-md border border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-5 py-4 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const buttonClassName =
  "w-[170px] rounded-md bg-[#B4451E] py-4 font-primary-bold text-lg text-white transition-colors hover:bg-[#9E3D1A] active:bg-[#8A3517]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-14 pt-10 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-2xl leading-tight text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="shrink-0 rounded p-1 text-[var(--DarkNeutral900)] hover:bg-[var(--DarkNeutral250)]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 shrink-0"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <span className="truncate text-lg">From entire frame to a singl...</span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 shrink-0 text-[var(--DarkNeutral1100)]"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <h2 className="font-primary-bold text-2xl leading-tight text-[var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-token"
            className="text-xl text-[var(--DarkNeutral1000)]"
          >
            Personal Access Token
          </label>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={fieldClassName}
        />

        <div className="mt-6 flex items-center gap-3">
          <label
            htmlFor="testElem-url"
            className="text-xl text-[var(--DarkNeutral1000)]"
          >
            Design URL
          </label>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 shrink-0"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClassName}
        />
      </div>

      <div className="mt-12 flex gap-9 pl-12">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-14 font-primary-bold text-2xl leading-tight text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
