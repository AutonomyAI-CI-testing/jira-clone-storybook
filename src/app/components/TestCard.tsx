const palette = {
  panel: "#000000",
  inputBg: "#272822",
  inputBorder: "#a5adad",
  inputBorderAlt: "#929291",
  buttonBg: "#843a17",
  buttonLabel: "#8c8078",
  placeholder: "#737470",
  heading: "#b5b5b5",
  sectionHeading: "#b2b2b1",
  recentHeading: "#b0b0b0",
  label: "#a4a4a3",
  labelAlt: "#a3a3a2",
  subtle: "#8b9291",
};

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={palette.heading}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke={palette.subtle}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </svg>
);

const ChevronUp = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke={palette.subtle}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 7L6 2l5 5" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className={`min-h-screen w-[254px] p-5 font-[Inter,sans-serif]`}
      style={{ backgroundColor: palette.panel }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: palette.heading }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsible row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUp />
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: palette.subtle }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-2">
        <ChevronUp />
        <span
          className="text-[13.5px] font-semibold leading-[16.34px]"
          style={{ color: palette.sectionHeading }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-2">
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: palette.label }}
        >
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mt-2 h-[37px] w-full bg-[#272822] px-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
        style={{ border: `1px solid ${palette.inputBorder}` }}
      />

      {/* Design URL */}
      <div className="mt-6 flex items-center gap-2">
        <span
          className="text-[11.5px] font-semibold leading-[13.92px]"
          style={{ color: palette.labelAlt }}
        >
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        readOnly
        className="mt-2 h-[37px] w-full bg-[#272822] px-3 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        style={{ border: `2px solid ${palette.inputBorderAlt}` }}
      />

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded text-[11.5px] font-semibold leading-[13.92px]"
          style={{ backgroundColor: palette.buttonBg, color: palette.buttonLabel }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded text-[11.5px] font-semibold leading-[13.92px]"
          style={{ backgroundColor: palette.buttonBg, color: palette.buttonLabel }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div
        className="mt-16 text-[13.5px] font-semibold leading-[16.34px]"
        style={{ color: palette.recentHeading }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
