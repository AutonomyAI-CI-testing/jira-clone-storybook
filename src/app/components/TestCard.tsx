/**
 * TestCard — a static, self-contained smoke test built from a Figma frame.
 *
 * Deliberately outside the app's design-token system: the frame's colours are
 * literal values, fidelity is approximate, and nothing here is interactive.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-8 pt-5 font-primary-bold text-[13.5px] text-[#b5b5b5]"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsible row */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUp className="h-[5px] w-2 shrink-0" />
        <span className="truncate font-primary text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="mt-[75px] flex items-center gap-2">
        <ChevronUp className="h-2 w-3 shrink-0" />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[26px] flex items-center justify-between">
        <span className="font-primary text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[11px] flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-2 font-primary text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary text-[11.5px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <div className="mt-[10px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-2 font-primary text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/
      </div>

      {/* Actions */}
      <div className="ml-6 mt-[23px] flex gap-[18px]">
        {["Awesome", "Prepare"].map((label) => (
          <div
            key={label}
            className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</h2>
    </div>
  );
};

const GearIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.2" />
    <circle cx="8" cy="8" r="5" strokeDasharray="2.2 2.2" />
    <path d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1" />
  </svg>
);

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export default TestCard;
