const ChevronUp = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1 7 6 1l5 6"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="8" r="2.6" stroke="#b5b5b5" strokeWidth="1.4" />
    <path
      d="M7 1.6v1.8M7 12.6v1.8M12.4 8h-1.8M3.4 8H1.6M10.8 4.2 9.5 5.5M4.5 10.5 3.2 11.8M10.8 11.8 9.5 10.5M4.5 5.5 3.2 4.2"
      stroke="#b5b5b5"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.4" stroke={color} strokeWidth="1.2" />
    <path d="M7.5 6.9v3.9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.85" fill={color} />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black font-primary"
  >
    <div className="flex items-center justify-between px-5 pt-5">
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-3 flex items-center gap-2 px-5">
      <ChevronUp width={8} height={5} color="#8b9291" />
      <span className="truncate text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[60px] flex items-center gap-2 px-5">
      <ChevronUp width={12} height={8} color="#b2b2b1" />
      <h2 className="text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-6 px-5">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testcard-pat"
          className="text-[11.5px] font-semibold text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        id="testcard-pat"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </div>

    <div className="mt-4 px-5">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testcard-url"
          className="text-[11.5px] font-semibold text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-2 h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </div>

    <div className="mt-6 flex justify-end gap-[17px] px-5">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[46px] px-5 pb-5 text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
