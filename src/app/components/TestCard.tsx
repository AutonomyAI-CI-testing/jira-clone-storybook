export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black pb-[62px] pl-5 pr-6 pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp width={8} height={5} stroke="#8b9291" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp width={12} height={8} stroke="#b2b2b1" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[23px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon stroke="#a4a4a3" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon stroke="#a3a3a2" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      aria-label="Design URL"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[19px] flex justify-end gap-[17px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface IconProps {
  width: number;
  height: number;
  stroke: string;
}

const ChevronUp = ({ width, height, stroke }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke={stroke}
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={stroke}
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" />
    <path d="M7.5 6.9v3.9" strokeLinecap="round" />
    <path d="M7.5 4.6h.01" strokeLinecap="round" />
  </svg>
);

const GearIcon = () => (
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
