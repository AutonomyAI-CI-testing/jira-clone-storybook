interface IconProps {
  className?: string;
}

const ChevronUp = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 16"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <path
      d="M2 14 12 3l10 11"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <circle cx="15" cy="15" r="13.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="15" cy="9.5" r="1.5" fill="currentColor" />
    <path
      d="M15 13.5v8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = ({ className = "" }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const FieldLabel = ({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) => (
  <div
    className={`flex items-center gap-10 text-[23px] font-semibold ${className}`}
  >
    <span>{label}</span>
    <InfoIcon />
  </div>
);

const actionButtonClassName =
  "h-[74px] w-[170px] rounded border-none bg-[#843a17] pl-8 text-left text-[23px] font-semibold text-[#8c8078]";

/**
 * A static, self-contained recreation of the "Test Page - Simple (FOR TESTING)"
 * Figma frame. It takes no props, holds no state and has no behaviour — it is a
 * smoke-test fixture, so its spacing, colours and typography are close to the
 * design rather than pixel-exact.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-black p-10 font-['Inter',sans-serif]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[27px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      <div className="mt-9 flex items-center gap-[18px]">
        <ChevronUp className="h-[10px] w-4 text-[#8b9291]" />
        <span className="truncate text-[23px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[154px] flex items-center gap-[10px]">
        <ChevronUp className="h-4 w-6 text-[#b2b2b1]" />
        <span className="text-[27px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <FieldLabel label="Personal Access Token" className="mt-14 text-[#a4a4a3]" />
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className="mt-6 h-[72px] w-full border border-[#a5adad] bg-[#272822] px-[38px] text-[23px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <FieldLabel label="Design URL" className="mt-[22px] text-[#a3a3a2]" />
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[22px] h-[74px] w-full border-2 border-[#929291] bg-[#272822] px-10 text-[21px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="ml-12 mt-11 flex gap-[34px]">
        {["Awesome", "Prepare"].map((label) => (
          <button key={label} type="button" className={actionButtonClassName}>
            {label}
          </button>
        ))}
      </div>

      <span className="mt-[94px] text-[27px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}
