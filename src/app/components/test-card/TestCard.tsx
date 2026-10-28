import { Button } from "../button/button";

/**
 * Smoke test: a self-contained card reproducing the "UI magician Agent" Figma
 * frame. It takes no props and renders the frame's static layout only — the
 * inputs are uncontrolled and the buttons have no behaviour.
 *
 * Colours and sizes come from the frame's extracted style guide. The frame's
 * palette (near-black panel, rust buttons) has no equivalent in this repo's
 * semantic token set, so the values are written literally, confined to this
 * file. Type uses the repo's CircularStd families in place of the design's
 * Inter so no second font enters the repo.
 */

const GearIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 7 6 2l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 15 15" width="15" height="15" fill="none" aria-hidden="true" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
    <path d="M7.5 6.8v4" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-5">
    <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">{children}</span>
    <InfoIcon />
  </div>
);

const actionButtonClass =
  "h-[37px] w-[85px] text-[11.5px] !bg-[#843a17] !text-[#8c8078] hover:!bg-[#96431b] active:!bg-[#73320f]";

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#1c1c1c] px-5 pt-5 pb-16 font-primary-bold">
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-4 text-[#b5b5b5]">UI magician Agent</span>
      <GearIcon className="h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
      <span className="font-primary text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[79px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-4 text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[28px]">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] font-primary text-[11.5px] leading-[14px] text-[#b5b5b5] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <FieldLabel>Design URL</FieldLabel>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-[19px] font-primary text-[10.5px] leading-[13px] text-[#b5b5b5] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <Button className={actionButtonClass}>Awesome</Button>
      <Button className={actionButtonClass}>Prepare</Button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-4 text-[#b0b0b0]">Recent Breakdowns</h2>
  </div>
);
