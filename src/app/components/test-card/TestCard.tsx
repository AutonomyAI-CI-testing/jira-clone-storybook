/**
 * Standalone reproduction of the "UI magician Agent" panel from a Figma frame.
 *
 * Self-contained smoke test: no props, no state and no interactivity. The
 * palette and the type sizes come from the frame's own style guide rather than
 * this repo's semantic tokens, because the panel is not part of the Jira clone
 * surface.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 font-primary"
  >
    <div className="flex h-4 items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B5B5B5]">
        UI magician Agent
      </span>
      <SettingsIcon className="h-4 w-[14px] text-[#B5B5B5]" />
    </div>

    <div className="mt-[18px] flex h-3.5 items-center gap-[9px] pl-[3px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8B9291]" />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8B9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex h-4 items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#B2B2B1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#B2B2B1]">
        Add New Design
      </span>
    </div>

    <div className="relative mt-[28px] h-3.5">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#A4A4A3]">
        Personal Access Token
      </span>
      <InfoIcon className="absolute left-[153px] top-0 h-[15px] w-[15px] text-[#A4A4A3]" />
    </div>

    <div className="mt-3 flex h-9 w-[211px] items-center border border-[#A5ADAD] bg-[#272822] pl-[19px]">
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="relative mt-[11px] h-3.5">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#A3A3A2]">
        Design URL
      </span>
      <InfoIcon className="absolute left-20 top-0 h-[15px] w-[15px] text-[#A3A3A2]" />
    </div>

    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
      <span className="min-w-0 truncate font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726E]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex h-[37px] gap-[17px] pl-6">
      <span className="flex w-[85px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]">
        Awesome
      </span>
      <span className="flex w-[85px] items-center justify-center rounded bg-[#843A17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8C8078]">
        Prepare
      </span>
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#B0B0B0]">
      Recent Breakdowns
    </span>
  </div>
);

const ChevronUpIcon = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 8 5" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 4 4 1.2 7 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 15 15" fill="none" aria-hidden="true" className={className}>
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.8v4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
  </svg>
);

const SettingsIcon = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z"
    />
  </svg>
);

interface GlyphProps {
  className?: string;
}
