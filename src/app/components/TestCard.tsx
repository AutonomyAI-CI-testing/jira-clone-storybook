export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black p-5 font-primary">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="text-[13.5px] font-primary-bold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    {/* Frame scope */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpSmall />
      <span className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[75px] flex items-center gap-[9px]">
      <ChevronUpLarge />
      <span className="text-[13.5px] font-primary-bold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px]">
      <div className="flex items-center gap-[6px]">
        <label
          htmlFor="test-card-token"
          className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-primary-bold text-[#a4a4a3] placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px]">
      <div className="flex items-center gap-[6px]">
        <label
          htmlFor="test-card-url"
          className="text-[11.5px] font-primary-bold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-primary-bold text-[#a3a3a2] placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[47px] text-[13.5px] font-primary-bold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpSmall = (): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="#8b9291"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M0.6 4.4 4 1l3.4 3.4" />
  </svg>
);

const ChevronUpLarge = (): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="#b2b2b1"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.6 6 1.6l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="#d0d0d0"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.7" />
    <path d="M7.5 7v3.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.8" fill="#d0d0d0" stroke="none" />
  </svg>
);
