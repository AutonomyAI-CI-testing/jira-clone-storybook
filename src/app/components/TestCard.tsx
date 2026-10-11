/**
 * Smoke test: a static reproduction of the attached Figma frame ("UI magician
 * Agent"). Deliberately self-contained — no props, no state, no imports from
 * the app's design system — and every colour is a literal arbitrary Tailwind
 * value, because this repo's Tailwind config replaces the stock palette.
 */

type IconProps = { className?: string };

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    className={className}
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.3" />
    <circle cx="7" cy="8" r="5.3" />
    <path d="M7 1.3v1.5M7 13.2v1.5M1.3 8h1.5M11.2 8h1.5M3 4l1.06 1.06M9.94 10.94 11 12M11 4 9.94 5.06M4.06 10.94 3 12" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.3}
    className={className}
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.3v4" strokeLinecap="round" />
    <path d="M8 4.9v.2" strokeLinecap="round" />
  </svg>
);

const FieldGroup = ({
  className,
  label,
  placeholder,
}: {
  className: string;
  label: string;
  placeholder: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon className="h-[15px] w-[15px] text-[#c9c9c9]" />
    </div>
    <input
      className="mt-2 h-10 w-full rounded-none border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#d4d4d4] placeholder:text-[#737470]"
      placeholder={placeholder}
    />
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] min-h-[508px] bg-[#1c1c1c] px-5 pt-5 pb-8 font-primary text-[13.5px] text-[#b3b3b3]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold leading-4 text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-4 w-[14px] text-[#c9c9c9]" />
    </div>

    {/* Collapsed row */}
    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
      <p className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    {/* Section heading */}
    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    {/* Fields */}
    <FieldGroup
      className="mt-6"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <FieldGroup
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    {/* Buttons */}
    <div className="mt-5 flex justify-center gap-4">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-11 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
