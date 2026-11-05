const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px] shrink-0 text-[#e6e6e6]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[19px] w-[19px] shrink-0 text-[#e6e6e6]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const headingClass =
  "font-primary-bold text-[21px] leading-none text-[#e6e6e6]";

const labelClass =
  "flex items-center gap-2 font-primary text-[17px] text-[#d4d4d4]";

const inputClass =
  "mt-2 h-[68px] w-full border border-[#8a8a8a] bg-[#1e1e1e] px-6 font-primary text-[17px] text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const buttonClass =
  "h-[68px] w-[170px] rounded bg-[#a8441a] font-primary-bold text-[19px] text-[#bda69c]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#0d0d0d] px-10 py-9 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] leading-none text-[#e6e6e6]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e6e6e6]" />
      <span className="truncate text-[17px] text-[#c9c9c9]">
        From entire frame to a singl…
      </span>
    </div>

    <section className="mt-24">
      <div className="flex items-center gap-3">
        <ChevronUpIcon className="h-6 w-6 shrink-0 text-[#e6e6e6]" />
        <h2 className={headingClass}>Add New Design</h2>
      </div>

      <div className="mt-12">
        <label className={labelClass} htmlFor="test-card-token">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-6">
        <label className={labelClass} htmlFor="test-card-url">
          Design URL
          <InfoIcon />
        </label>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="mt-10 flex justify-end gap-9">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className={`mt-16 ${headingClass}`}>Recent Breakdowns</h2>
  </div>
);
