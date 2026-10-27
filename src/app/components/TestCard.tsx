/**
 * Static card rebuilt from the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke test: no props, no state, no data and no handlers.
 * The frame's literal colours are used as arbitrary Tailwind values because the
 * repo's semantic tokens have no near match for this dark/rust palette.
 */

const actions = ["Awesome", "Prepare"];

const buttonClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

const inputClassName =
  "mt-3 h-[39px] w-full border bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[#737470]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-3 flex items-center gap-3">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[88px]" />

    <div className="flex items-center gap-3">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-9 flex items-center gap-2">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={`${inputClassName} border-[#a5adad]`}
    />

    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <InfoIcon className="text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      className={`${inputClassName} h-[41px] border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-9 flex gap-4">
      {actions.map((action) => (
        <button key={action} type="button" className={buttonClassName}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-[14px] text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    className={`h-[15px] w-[15px] ${className ?? ""}`}
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v3.8" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);
