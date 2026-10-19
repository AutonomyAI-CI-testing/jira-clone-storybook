const FIELD_CLASS =
  "mt-[12px] block h-[36px] w-full bg-[#272822] px-[19px] font-primary outline-none";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c9c9c9"
    strokeWidth="1.7"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2.6l1.1 2.5 2.7-.5 1 2.5 2.6.9-.9 2.6.9 2.6-2.6.9-1 2.5-2.7-.5-1.1 2.5-1.1-2.5-2.7.5-1-2.5-2.6-.9.9-2.6-.9-2.6 2.6-.9 1-2.5 2.7.5z" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.8L6 1.4l5 5.4" />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#b5b5b5" strokeWidth="1" />
    <circle cx="7.5" cy="4.6" r="0.85" fill="#b5b5b5" />
    <path
      d="M7.5 6.9v3.7"
      stroke="#b5b5b5"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-[20px] pb-[62px] pt-[20px] font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon width={8} height={5} />
      <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpIcon width={12} height={8} />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex items-center gap-[12px]">
      <label
        htmlFor="test-card-token"
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${FIELD_CLASS} border border-[#a5adad] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]`}
    />

    <div className="mt-[11px] flex items-center gap-[12px]">
      <label
        htmlFor="test-card-url"
        className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={`${FIELD_CLASS} border-2 border-[#929291] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
