const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
  </svg>
);

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M0.6 3.8L4 0.8L7.4 3.8" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.4v4.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.2" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pt-5 pb-[62px] font-primary-bold"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <span className="text-[#c4c4c4]">
        <GearIcon />
      </span>
    </div>

    {/* Collapsed frame row */}
    <div className="mt-[18px] flex items-center gap-2 pl-[3px] text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="text-[13.5px] leading-[16px]">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[14px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[14px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-2 text-[#a3a3a2]">
      <span className="text-[11.5px] leading-[14px]">Design URL</span>
      <InfoIcon />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
      <span className="text-[10.5px] leading-[13px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[23px] ml-6 flex gap-[17px]">
      {BUTTON_LABELS.map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]"
        >
          <span className="text-[11.5px] leading-[14px] text-[#8c8078]">
            {label}
          </span>
        </div>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
