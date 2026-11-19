import cx from "classix";

const BUTTON_CLASS =
  "h-[52px] w-[170px] rounded-[6px] bg-[#8f3f18] text-[18px] text-[#b9b9b9]";

const INPUT_CLASS =
  "mt-7 h-14 w-full rounded-[2px] border bg-transparent px-9 text-[16px] text-[#c7c7c7] placeholder:text-[#8a8a8a]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#141414] px-[42px] pb-10 pt-10 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[20px] leading-none text-[#c4c4c4]">
        UI magician Agent
      </h2>
      <GearIcon className="text-[#d0d0d0]" />
    </div>

    <div className="mt-10 flex items-center gap-3.5">
      <ChevronUpIcon className="text-[#e6e6e6]" />
      <span className="text-[16px] text-[#8e8e8e]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3.5">
      <ChevronUpIcon className="text-[#e6e6e6]" />
      <h3 className="font-primary-bold text-[20px] leading-none text-[#d0d0d0]">
        Add New Design
      </h3>
    </div>

    <div className="mt-14 flex items-center gap-4">
      <label htmlFor="test-card-token" className="text-[16px] text-[#c7c7c7]">
        Personal Access Token
      </label>
      <InfoIcon className="text-[#e6e6e6]" />
    </div>
    <input
      id="test-card-token"
      name="token"
      autoComplete="off"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={cx(INPUT_CLASS, "border-[#5a5a5a]")}
    />

    <div className="mt-10 flex items-center gap-4">
      <label htmlFor="test-card-url" className="text-[16px] text-[#c7c7c7]">
        Design URL
      </label>
      <InfoIcon className="text-[#e6e6e6]" />
    </div>
    <input
      id="test-card-url"
      name="url"
      type="url"
      autoComplete="off"
      placeholder="https://www.figma.com/file/"
      className={cx(INPUT_CLASS, "border-[#8a8a8a]")}
    />

    <div className="mt-14 flex gap-8 pl-[46px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-[20px] leading-none text-[#d0d0d0]">
      Recent Breakdowns
    </h3>
  </div>
);

const GearIcon = ({ size = 26, className = "" }: IconProps): JSX.Element => (
  <svg
    className={cx("shrink-0", className)}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 20, className = "" }: IconProps): JSX.Element => (
  <svg
    className={cx("shrink-0", className)}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ size = 21, className = "" }: IconProps): JSX.Element => (
  <svg
    className={cx("shrink-0", className)}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

interface IconProps {
  size?: number;
  className?: string;
}
