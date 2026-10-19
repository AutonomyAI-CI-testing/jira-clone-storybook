export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon width={8} height={5} color="#8b9291" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpIcon width={12} height={8} color="#b2b2b1" />
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel text="Personal Access Token" color="#a4a4a3" className="mt-7" />
    <input
      readOnly
      aria-label="Personal Access Token"
      defaultValue="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[14px] text-[#737470]"
    />

    <FieldLabel text="Design URL" color="#a3a3a2" className="mt-[11px]" />
    <input
      readOnly
      aria-label="Design URL"
      defaultValue="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[13px] text-[#71726e]"
    />

    <div className="mt-[21px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const FieldLabel = ({ text, color, className = "" }: FieldLabelProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span
      className="font-primary-bold text-[11.5px] leading-[14px]"
      style={{ color }}
    >
      {text}
    </span>
    <InfoIcon color={color} />
  </div>
);

const CardButton = ({ children }: CardButtonProps) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({ width, height, color }: ChevronUpIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke={color}
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d={`M1 ${height - 1} ${width / 2} 1 ${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = ({ color }: IconColorProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={color}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.8v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.7" fill={color} stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldLabelProps {
  text: string;
  color: string;
  className?: string;
}

interface CardButtonProps {
  children: string;
}

interface ChevronUpIconProps {
  width: number;
  height: number;
  color: string;
}

interface IconColorProps {
  color: string;
}
