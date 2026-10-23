/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel
 * from the Figma frame. No props, no state, no data; layout only.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#000000] p-1 font-primary">
      <div className="flex h-[500px] flex-col rounded-[10px] bg-[#161616] px-4 pt-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h1 className="font-primary-bold text-xs text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <GearIcon />
        </div>

        {/* Collapsed summary */}
        <div className="mt-[18px] flex items-center gap-2">
          <ChevronIcon width={8} height={5} strokeWidth={1.2} />
          <span className="truncate text-2xs text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Section */}
        <div className="mt-[75px] flex items-center gap-2">
          <ChevronIcon width={12} height={8} strokeWidth={1.6} />
          <h2 className="font-primary-bold text-xs text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Personal access token */}
        <div className="mt-7 flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <label
              htmlFor="test-card-token"
              className="text-2xs text-[#a4a4a3]"
            >
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            id="test-card-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-2xs text-[#b0b0b0] placeholder:text-[#737470]"
          />
        </div>

        {/* Design URL */}
        <div className="mt-3 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="test-card-url" className="text-2xs text-[#a3a3a2]">
              Design URL
            </label>
            <InfoIcon />
          </div>
          <input
            id="test-card-url"
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-2xs text-[#b0b0b0] placeholder:text-[#71726e]"
          />
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center justify-center gap-4">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>

        {/* Recent breakdowns */}
        <h3 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
  >
    {label}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c7c7c7"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-px shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronIcon = ({
  width,
  height,
  strokeWidth,
}: {
  width: number;
  height: number;
  strokeWidth: number;
}) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="#b0b0b0"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d={`M1 ${height - 1} ${width / 2} 1 ${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#b0b0b0" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.4" r="0.85" fill="#b0b0b0" />
    <path
      d="M7.5 6.8V10.4"
      stroke="#b0b0b0"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

export default TestCard;
