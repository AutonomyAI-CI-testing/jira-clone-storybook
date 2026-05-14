// Icon components for visual clarity
const SettingsIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Settings"
  >
    <path
      d="M7 10a3 3 0 100-6 3 3 0 000 6z"
      fill="#b5b5b5"
      opacity="0.7"
    />
    <path
      d="M13.5 8a1 1 0 01-.5-.866V6.5a.5.5 0 00-.5-.5h-.6a1 1 0 01-.9-.5l-.3-.5a1 1 0 010-1l.4-.4a.5.5 0 000-.7l-.8-.8a.5.5 0 00-.7 0l-.4.4a1 1 0 01-1 0l-.5-.3a1 1 0 01-.5-.9V1.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v.6a1 1 0 01-.5.9l-.5.3a1 1 0 01-1 0l-.4-.4a.5.5 0 00-.7 0l-.8.8a.5.5 0 000 .7l.4.4a1 1 0 010 1l-.3.5a1 1 0 01-.9.5H.5a.5.5 0 00-.5.5v.634A1 1 0 01.5 8H0v1h.5a1 1 0 01.5.866V10.5a.5.5 0 00.5.5h.6a1 1 0 01.9.5l.3.5a1 1 0 010 1l-.4.4a.5.5 0 000 .7l.8.8a.5.5 0 00.7 0l.4-.4a1 1 0 011 0l.5.3a1 1 0 01.5.9v.6a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-.6a1 1 0 01.5-.9l.5-.3a1 1 0 011 0l.4.4a.5.5 0 00.7 0l.8-.8a.5.5 0 000-.7l-.4-.4a1 1 0 010-1l.3-.5a1 1 0 01.9-.5h.6a.5.5 0 00.5-.5v-.634A1 1 0 0113.5 9H14V8h-.5z"
      fill="#b5b5b5"
      opacity="0.7"
    />
  </svg>
);

const ChevronUpIcon = ({ size = "small" }: { size?: "small" | "medium" }) => {
  const dimensions = size === "small" ? { width: 10, height: 7, viewBox: "0 0 8 5", path: "M4 0l4 5H0l4-5z" } : { width: 14, height: 10, viewBox: "0 0 12 8", path: "M6 0l6 8H0l6-8z" };
  const fill = size === "small" ? "#8b9291" : "#b2b2b1";
  
  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={dimensions.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      aria-hidden="true"
    >
      <path d={dimensions.path} fill={fill} opacity="0.8" />
    </svg>
  );
};

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" opacity="0.7" />
    <text x="7.5" y="11" fontSize="10" fontWeight="bold" textAnchor="middle" fill={color}>
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] bg-[#1C1D17] p-5">
      {/* Header row with agent title and settings access */}
      <div className="mb-[16px] flex items-center justify-between">
        <h1 className="font-sans text-[14.5px] font-semibold leading-[17.5px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle describing current workflow context */}
      <div className="mb-[70px] flex items-center gap-2">
        <ChevronUpIcon size="small" />
        <p className="font-sans text-[12.5px] font-semibold leading-[15px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section for adding new design */}
      <div className="mb-[30px] flex items-center gap-2">
        <ChevronUpIcon size="medium" />
        <h2 className="font-sans text-[14.5px] font-semibold leading-[17.5px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-[11px] flex items-center justify-between">
        <label
          htmlFor="token"
          className="font-sans text-[12.5px] font-semibold leading-[15px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon color="#a4a4a3" />
      </div>

      <input
        id="token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-[18px] h-[39px] w-[214px] border border-[#a5adad] bg-[#272822] px-[10px] py-[12px] font-sans text-[12.5px] font-semibold leading-[15px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL input field for Figma file reference */}
      <div className="mb-[11px] flex items-center justify-between">
        <label
          htmlFor="url"
          className="font-sans text-[12.5px] font-semibold leading-[15px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon color="#a3a3a2" />
      </div>

      <input
        id="url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-[28px] h-[41px] w-[214px] border-2 border-[#929291] bg-[#272822] px-[10px] py-[13px] font-sans text-[11.5px] font-semibold leading-[14px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Action buttons for design processing */}
      <div className="mb-[56px] flex gap-[16px]">
        <button className="h-[40px] w-[87px] rounded bg-[#843A17] font-sans text-[12.5px] font-semibold leading-[15px] text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[40px] w-[87px] rounded bg-[#843A17] font-sans text-[12.5px] font-semibold leading-[15px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <h2 className="font-sans text-[14.5px] font-semibold leading-[17.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer */}
      <div className="mt-3 border-t border-gray-300 pt-3 text-center">
        <p className="font-sans text-xs text-[#a4a4a3]">© AutonomyAI</p>
      </div>
    </div>
  );
};
