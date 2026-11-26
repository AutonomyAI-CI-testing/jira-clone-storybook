/**
 * A static reproduction of the "UI magician Agent" Figma frame.
 *
 * The colours below are the frame's own values rather than this repo's semantic
 * theme tokens: the frame is a fixed dark panel whose palette (near-black
 * surface, #272822 fields, #843a17 buttons, grey text ramp) has no equivalent
 * in tailwind.config.js. They are written as arbitrary Tailwind values on
 * purpose — that config replaces Tailwind's default palette, so `bg-gray-800`
 * style utilities do not compile here.
 *
 * The panel is drawn, not wired: it takes no props, holds no state and its
 * controls do nothing.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-6"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-2" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[83px] flex items-center gap-1 text-[#b2b2b1]">
        <ChevronUpIcon className="h-2 w-3" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-6">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>

      <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-3 flex items-center gap-5">
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon />
      </div>

      <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
        <span className="font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <PanelButton>Awesome</PanelButton>
        <PanelButton>Prepare</PanelButton>
      </div>

      <p className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};

/** A button of the frame: drawn only, so it is not a focusable control. */
const PanelButton = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]">
        {children}
      </span>
    </div>
  );
};

const GearIcon = (): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#b5b5b5]"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

const ChevronUpIcon = ({ className }: ChevronUpIconProps): JSX.Element => {
  return (
    <svg
      viewBox="0 0 12 8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M1 7L6 2l5 5" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#b5b5b5]"
    >
      <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M7.5 6.6v4.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.4" r="0.75" fill="currentColor" />
    </svg>
  );
};

interface ChevronUpIconProps {
  className: string;
}
