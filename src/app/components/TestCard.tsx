import cx from "classix";

/**
 * Smoke test: a self-contained recreation of the "UI magician Agent" panel
 * from a Figma frame. No props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col overflow-auto bg-[#000000] px-5 pb-6 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-black text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center hover:text-[#e0e0e0]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="truncate text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary-black text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <label
      htmlFor="test-card-access-token"
      className="mt-[28px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
    >
      Personal Access Token
      <InfoIcon />
    </label>
    <input
      id="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-[36px] w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[13.92px] text-[#d0d0d0] placeholder:text-[#737470]"
    />

    <label
      htmlFor="test-card-design-url"
      className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
    >
      Design URL
      <InfoIcon />
    </label>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#d0d0d0] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[47px] font-primary-black text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ActionButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078] hover:bg-[#96441c] active:bg-[#6f3013]"
  >
    {children}
  </button>
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
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    className={cx("shrink-0", className)}
    aria-hidden="true"
  >
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.8" r="0.9" fill="currentColor" />
  </svg>
);

interface IconProps {
  className?: string;
}
