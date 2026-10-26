import type { ReactNode } from "react";

/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent"
 * Figma frame. It takes no props and holds its own content.
 *
 * The frame's dark palette sits outside the product's semantic tokens, so the
 * colours here are literal values: the token classes resolve through CSS
 * variables per theme and would render this panel light.
 */

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="8" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 1.3v1.7M8 13v1.7M1.3 8h1.7M13 8h1.7M3.3 3.3l1.2 1.2M11.5 11.5l1.2 1.2M12.7 3.3l-1.2 1.2M4.5 11.5l-1.2 1.2"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 5L4.5 1.5L8 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.8v3.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);

const PanelButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-2xs text-[#8c8078]"
  >
    {children}
  </button>
);

const PanelField = ({
  label,
  value,
  emphasized,
}: {
  label: string;
  value: string;
  emphasized?: boolean;
}): JSX.Element => (
  <>
    <div className="mt-3 flex items-center justify-between text-[#a3a3a2]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      defaultValue={value}
      className={`mt-2 h-9 w-full bg-[#272822] px-2 font-primary text-2xs text-[#737470] ${
        emphasized ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      }`}
    />
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#0d0d0d] p-5 font-primary text-2xs text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <PanelField label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxx" />
    <PanelField
      label="Design URL"
      value="https://www.figma.com/file/:"
      emphasized
    />

    <div className="mt-5 flex justify-center gap-4">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <div className="mt-10 font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
