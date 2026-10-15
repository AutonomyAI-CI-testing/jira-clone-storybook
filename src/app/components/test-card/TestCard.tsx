/**
 * Static reproduction of a Figma frame, built as a design-to-component smoke
 * test. Deliberately self-contained: no props, no state, no app imports, and
 * its own literal palette instead of the app's theme tokens.
 */

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="8" r="2.6" stroke="#b5b5b5" strokeWidth="1.2" />
    <path
      d="M7 1.4v1.7M7 12.9v1.7M2.2 3.3l1.2 1.2M10.6 11.5l1.2 1.2M1 8h1.7M11.3 8H13M2.2 12.7l1.2-1.2M10.6 4.5l1.2-1.2"
      stroke="#b5b5b5"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
  color,
}: {
  className: string;
  color: string;
}) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.1" />
    <path
      d="M7.5 7v3.6"
      stroke={color}
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.8" fill={color} />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-[family-name:Inter,system-ui,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-[8px]" color="#8b9291" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <ChevronUpIcon className="h-[8px] w-[12px]" color="#b2b2b1" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[27px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <div className="mt-[12px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5">
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[23px] flex gap-[17px] pl-6">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
