const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]";

const UpChevron = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 8 5"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M0.5 4.5 L4 1 L7.5 4.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="h-[15px] w-[15px]"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1" />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" />
    <path
      d="M7.5 6.6 V10.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="h-[16px] w-[14px] text-[#b5b5b5]"
  >
    <circle
      cx="7"
      cy="8"
      r="6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="2 1.6"
    />
    <circle cx="7" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="box-border flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-[20px] pt-[20px] font-primary text-[11.5px]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <UpChevron className="h-[5px] w-[8px]" />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
      <UpChevron className="h-[8px] w-[12px]" />
      <span className="text-[13.5px]">Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-[8px] text-[#a4a4a3]">
      <span className="text-[11.5px]">Personal Access Token</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[10px] h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[8px] text-[#a3a3a2]">
      <span className="text-[11.5px]">Design URL</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[10px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[20px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mx-[24px] mt-[23px] flex gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-[46px] text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
