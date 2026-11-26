/**
 * TestCard — a self-contained smoke-test component built from a Figma frame.
 *
 * It takes no props, holds no state and reads no data. Colours, sizes and type
 * come straight from the frame's own style guide as Tailwind arbitrary values,
 * so it is deliberately not theme-aware: it renders the dark panel it was
 * designed as, in any theme.
 */

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <path d="M1 7 6 2l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 6.6v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  label,
  colorClass,
}: {
  htmlFor: string;
  label: string;
  colorClass: string;
}): JSX.Element => (
  <div
    className={`mt-[10px] flex items-center justify-between ${colorClass}`}
  >
    <label
      htmlFor={htmlFor}
      className="text-[11.5px] font-semibold leading-[13.92px]"
    >
      {label}
    </label>
    <InfoIcon />
  </div>
);

const ACTION_BUTTON_CLASSES =
  "h-[40px] w-[87px] rounded-[4px] bg-[#843A17] text-[11.5px] font-semibold leading-[13.92px] text-[#8C8078]";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </h1>
      <span className="text-[#C9C9C9]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8B9291]">
      <ChevronUp width={8} height={5} />
      <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#B2B2B1]">
      <ChevronUp width={12} height={8} />
      <h2 className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </h2>
    </div>

    <FieldLabel
      htmlFor="testElem-token"
      label="Personal Access Token"
      colorClass="text-[#A4A4A3]"
    />
    <input
      id="testElem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="h-[39px] w-full border border-[#A5ADAD] bg-[#272822] pl-[21px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <FieldLabel
      htmlFor="testElem-url"
      label="Design URL"
      colorClass="text-[#A3A3A2]"
    />
    <input
      id="testElem-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[9px] h-[41px] w-full border-2 border-[#929291] bg-[#272822] pl-[22px] text-[10.5px] leading-[12.71px] text-[#71726E] placeholder:text-[#71726E]"
    />

    <div className="mt-[19px] flex gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={ACTION_BUTTON_CLASSES}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[45px] text-[13.5px] font-semibold leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </h2>
  </div>
);
