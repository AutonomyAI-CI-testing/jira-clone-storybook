const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-6 w-6 shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75v.5" />
  </svg>
);

const buttonClasses =
  "flex-1 rounded bg-[#a04a1e] px-6 py-4 font-primary-light text-lg text-white hover:bg-[#8a3f19]";

const inputClasses =
  "mt-4 w-full rounded border border-[#5a5a5a] bg-[#1a1a1a] px-4 py-4 font-primary-light text-base text-white outline-none placeholder:text-[#8a8a8a]";

/**
 * Static reproduction of the "UI magician Agent" frame — a smoke test for the
 * design-to-component path. Display only: no props, no state.
 */
const TestCard = () => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-[#111111] px-8 py-8 font-primary text-white"
  >
    <div className="mx-auto w-full max-w-[430px]">
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-white"
        >
          <GearIcon />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ChevronUpIcon className="h-5 w-5 shrink-0 text-white" />
        <p className="truncate font-primary-light text-base text-[#a0a0a0]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUpIcon className="h-6 w-6 shrink-0 text-white" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-token"
            className="font-primary-light text-lg text-white"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClasses}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="testElem-url"
            className="font-primary-light text-lg text-white"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputClasses}
        />
      </div>

      <div className="mt-8 flex gap-6">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      <h3 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h3>
    </div>
  </div>
);

export default TestCard;
