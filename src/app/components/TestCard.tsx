const ChevronUp = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={`M${width * 0.125} ${height * 0.8} L${width / 2} ${height * 0.2} L${width * 0.875} ${height * 0.8}`}
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke={color} strokeWidth="1.2" />
    <path
      d="M7.5 7.2v3.3"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.9" r="0.75" fill={color} />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] overflow-hidden bg-[#1C1D17] px-5 pt-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.3px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="shrink-0">
          <svg
            width="14"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              stroke="#b5b5b5"
              strokeWidth="1.6"
            />
            <circle cx="12" cy="12" r="3" stroke="#b5b5b5" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <ChevronUp width={8} height={5} color="#8b9291" />
        <span className="truncate font-primary-bold text-[11.5px] leading-[13.9px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-3">
        <ChevronUp width={12} height={8} color="#b2b2b1" />
        <span className="font-primary-bold text-[13.5px] leading-[16.3px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <label className="mt-7 block">
        <span className="flex items-center gap-4">
          <span className="font-primary-bold text-[11.5px] leading-[13.9px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoCircle color="#a4a4a3" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 block h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        />
      </label>

      <label className="mt-3 block">
        <span className="flex items-center gap-4">
          <span className="font-primary-bold text-[11.5px] leading-[13.9px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoCircle color="#a3a3a2" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 block h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </label>

      <div className="ml-6 mt-[22px] flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.9px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.9px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.3px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
