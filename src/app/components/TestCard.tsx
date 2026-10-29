const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]";

const INPUT_CLASS =
  "mt-3 h-9 w-full bg-[#272822] px-2 font-primary text-2xs placeholder:text-[#737470]";

const ChevronUp = ({ size = "sm" }: ChevronUpProps): JSX.Element => (
  <svg
    width={size === "lg" ? 12 : 8}
    height={size === "lg" ? 8 : 5}
    viewBox={size === "lg" ? "0 0 12 8" : "0 0 8 5"}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d={size === "lg" ? "M1 6L6 1L11 6" : "M1 4L4 1L7 4"} />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-black p-5">
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp />
      <span className="truncate font-primary text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp size="lg" />
      <h2 className="font-primary-bold text-xs">Add New Design</h2>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[#a4a4a3]">
      <label
        htmlFor="test-card-token"
        className="font-primary text-2xs"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${INPUT_CLASS} border border-[#a5adad] text-[#737470]`}
    />

    <div className="mt-3 flex items-center gap-2 text-[#a3a3a2]">
      <label htmlFor="test-card-url" className="font-primary text-2xs">
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={`${INPUT_CLASS} border-2 border-[#929291] text-[#71726e]`}
    />

    <div className="mt-6 flex gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpProps {
  size?: "sm" | "lg";
}
