/**
 * TestCard — a self-contained reproduction of the supplied Figma frame
 * (a dark "UI magician Agent" settings panel).
 *
 * Smoke test only: no props, no state, no app imports. The frame is a dark,
 * out-of-system panel with no matching semantic token, so the colours are
 * literal values read off the frame rather than repo tokens.
 */

const iconClass = "shrink-0";

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={iconClass}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    width="20"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={iconClass}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    width="20"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={iconClass}
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const CaretUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className={iconClass}
    fill="none"
    height="22"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="3"
    viewBox="0 0 24 24"
    width="22"
  >
    <path d="m6 16 6-7 6 7" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mt-[44px]">
    <div className="flex items-center gap-[10px]">
      <label
        className="font-primary-bold text-[16px] text-[#d0d0d0]"
        htmlFor={id}
      >
        {label}
      </label>
      <span className="text-[#cfcfcf]">
        <InfoIcon />
      </span>
    </div>
    <input
      className="mt-[16px] h-[70px] w-full rounded-[3px] border border-[#8a8a8a] bg-[#2b2b2b] px-[34px] text-[17px] text-[#d8d8d8] placeholder:text-[#8b8b8b]"
      id={id}
      placeholder={placeholder}
      type="text"
    />
  </div>
);

const BUTTONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    className="w-[508px] bg-[#1e1e1e] px-[40px] pt-[38px] pb-[110px] font-primary text-[#e6e6e6]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-[22px] text-[#e6e6e6]">
        UI magician Agent
      </h2>
      <button
        aria-label="Settings"
        className="flex items-center justify-center text-[#d0d0d0]"
        type="button"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-[38px] flex items-center gap-[14px]">
      <ChevronUpIcon />
      <span className="truncate text-[17px] text-[#c8c8c8]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-[12px]">
      <CaretUpIcon />
      <h3 className="font-primary-black text-[20px] text-[#e0e0e0]">
        Add New Design
      </h3>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testElem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-[54px] flex gap-[38px]">
      {BUTTONS.map((label) => (
        <button
          className="h-[68px] flex-1 rounded-[6px] bg-[#a04a1e] font-primary text-[19px] text-[#d8d8d8] hover:bg-[#8d411a]"
          key={label}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[108px] font-primary-black text-[20px] text-[#cfcfcf]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
