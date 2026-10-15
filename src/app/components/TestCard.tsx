const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 7L6 1.5L11 7"
      stroke="#b0b0b0"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="#a4a4a3" strokeWidth="1.2" />
    <path
      d="M7.5 6.6V10.4"
      stroke="#a4a4a3"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.85" fill="#a4a4a3" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" stroke="#b0b0b0" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="#b0b0b0"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FieldLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-[24px]">
    <span className="text-[11.5px] font-semibold text-[#a4a4a3]">{label}</span>
    <InfoCircle />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#000000] px-5 pt-5 pb-[62px]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp width={8} height={5} />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUp width={12} height={8} />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px]">
      <FieldLabel label="Personal Access Token" />
      <div className="mt-[10px] flex h-[39px] w-full items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    {/* Design URL */}
    <div className="mt-[10px]">
      <FieldLabel label="Design URL" />
      <div className="mt-[9px] flex h-[41px] w-full items-center border border-[#a5adad] bg-[#272822] pl-5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    {/* Actions */}
    <div className="mt-[20px] flex justify-end gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Footer */}
    <div className="mt-[47px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
