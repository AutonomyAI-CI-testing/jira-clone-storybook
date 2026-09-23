/**
 * TestCard — smoke-test reproduction of the "UI magician Agent" panel frame.
 *
 * Deliberately standalone: no props, no repo design tokens, no shared
 * components. Values are the frame's literal colours/sizes so the card looks
 * like the reference rather than like this app's light theme. Approximate —
 * pixel fidelity is not the goal here.
 */

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[14px] text-[#8c8078]";

const INPUT_CLASS =
  "mt-[12px] w-[211px] bg-[#272822] px-[19px] font-semibold outline-none";

function ChevronUp({
  width = 12,
  height = 8,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M1 7L6 2L11 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="7.5"
        cy="7.5"
        r="6.4"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path
        d="M7.5 7v3.6"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldLabel({ children, color }: { children: string; color: string }) {
  return (
    <div className={`flex items-center gap-2 ${color}`}>
      <span className="text-[11.5px] font-semibold leading-[14px]">
        {children}
      </span>
      <InfoIcon />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-[Inter,sans-serif]"
    >
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] font-semibold leading-[16px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUp width={8} height={5} />
        <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-[9px] text-[#b2b2b1]">
        <ChevronUp />
        <span className="text-[13.5px] font-semibold leading-[16px]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <FieldLabel color="text-[#a4a4a3]">Personal Access Token</FieldLabel>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`${INPUT_CLASS} h-9 border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]`}
        />
      </div>

      <div className="mt-[11px]">
        <FieldLabel color="text-[#a3a3a2]">Design URL</FieldLabel>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={`${INPUT_CLASS} mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]`}
        />
      </div>

      <div className="mt-[23px] flex gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <span className="mt-[46px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
