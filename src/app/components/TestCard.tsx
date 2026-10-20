import cx from "classix";

/**
 * TestCard — a static rendering of the "UI magician Agent" Figma frame.
 *
 * Smoke test: no props, no state, no interactivity. The frame's own colours are
 * written as Tailwind arbitrary values because the repo's token layer has no
 * equivalent for this dark/rust palette. See task/PLAN.md.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1c1c1c] px-5 py-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    {/* Collapsed description */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <FieldLabel className="mt-[27px]">Personal Access Token</FieldLabel>
    <InputBox className="mt-[11px] border-[#a5adad]">
      figd_xxxxxxxxxxxxxxxxxx
    </InputBox>

    <FieldLabel className="mt-[11px]">Design URL</FieldLabel>
    <InputBox className="mt-[10px] border-[#929291]">
      https://www.figma.com/file/:
    </InputBox>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <p className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    role="img"
    aria-label="Settings"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUp = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 7 6 2l5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
    <path
      d="M8 7.4v4.2"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldLabelProps {
  children: React.ReactNode;
  className?: string;
}

const FieldLabel = ({ children, className }: FieldLabelProps) => (
  <div className={cx("flex items-center gap-2", className)}>
    <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      {children}
    </span>
    <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
  </div>
);

interface InputBoxProps {
  children: React.ReactNode;
  className?: string;
}

const InputBox = ({ children, className }: InputBoxProps) => (
  <div
    className={cx(
      "flex h-9 w-[211px] items-center border bg-[#272822] px-[19px]",
      className
    )}
  >
    <span className="truncate text-[11.5px] leading-[13.92px] text-[#737470]">
      {children}
    </span>
  </div>
);

const PanelButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);
