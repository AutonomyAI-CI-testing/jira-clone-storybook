interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    className={className}
  >
    <circle cx="8" cy="8" r="6.75" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="flex items-center justify-between">
    <span className="text-[11.5px] text-[#a4a4a3]">{label}</span>
    <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
  </div>
);

const inputClassName =
  "mt-3 h-9 w-full rounded-[2px] border bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-16 pt-5 text-[13.5px] font-semibold leading-none"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-[#b5b5b5]">UI magician Agent</h1>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsible section row */}
    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <p className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    {/* Add New Design */}
    <div className="mt-[88px] flex items-center gap-[10px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[#b2b2b1]">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-5">
      <FieldLabel label="Personal Access Token" />
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${inputClassName} border-[#a5adad]`}
      />
    </div>

    {/* Design URL */}
    <div className="mt-2">
      <FieldLabel label="Design URL" />
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={`${inputClassName} border-2 border-[#929291] text-[10.5px]`}
      />
    </div>

    {/* Actions */}
    <div className="mt-6 flex gap-[17px] pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
