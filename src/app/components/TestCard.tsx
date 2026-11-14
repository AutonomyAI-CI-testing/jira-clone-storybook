// Smoke-test replica of a cropped Figma frame ("UI magician Agent").
// Deliberately self-contained: no props, no state, no interactivity.
// The reference is another product's dark UI, so its colours are written
// as literals — nothing in this repo's token set resolves to them.

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-[38px] pb-[48px] pt-[38px] text-[#d9d9d9]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="text-[22px] font-bold leading-none">UI magician Agent</h1>
      <GearIcon />
    </div>

    {/* Collapsed section summary */}
    <div className="mt-[42px] flex items-center gap-[18px] text-[#b3b3b3]">
      <ChevronUpIcon size={26} />
      <span className="text-[20px] leading-none">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[160px] flex items-center gap-[16px]">
      <ChevronUpIcon size={30} />
      <h2 className="text-[26px] font-bold leading-none">Add New Design</h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[56px] flex items-center gap-[16px]">
      <label
        htmlFor="test-elem-token"
        className="text-[22px] font-bold leading-none"
      >
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-elem-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-[26px] h-[74px] w-full rounded-[2px] border border-[#8a8a8a] bg-transparent px-[24px] text-[20px] text-[#d9d9d9] outline-none placeholder:text-[#8c8c8c]"
    />

    {/* Design URL */}
    <div className="mt-[22px] flex items-center gap-[16px]">
      <label
        htmlFor="test-elem-url"
        className="text-[22px] font-bold leading-none"
      >
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-elem-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[26px] h-[74px] w-full rounded-[2px] border border-[#8a8a8a] bg-transparent px-[24px] text-[20px] text-[#d9d9d9] outline-none placeholder:text-[#8c8c8c]"
    />

    {/* Actions */}
    <div className="mt-[40px] flex justify-end gap-[34px] pr-[8px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-[66px] text-[26px] font-bold leading-none">
      Recent Breakdowns
    </h2>
  </div>
);

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[72px] w-[170px] rounded-[6px] bg-[#a0441b] text-[20px] font-bold text-[#d0d0d0]"
  >
    {children}
  </button>
);

const ChevronUpIcon = ({ size = 24 }: ChevronUpIconProps) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    className="shrink-0"
    {...iconProps}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="30"
    height="30"
    className="shrink-0"
    {...iconProps}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="24"
    height="24"
    className="shrink-0"
    {...iconProps}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

interface ActionButtonProps {
  children: string;
}

interface ChevronUpIconProps {
  size?: number;
}
