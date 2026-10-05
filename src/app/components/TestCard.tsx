const ChevronUpIcon = ({ size = 12 }: { size?: number }): JSX.Element => (
  <svg
    width={size}
    height={(size * 8) / 12}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.7 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.7a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15.1 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.3 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z"
      stroke="currentColor"
      strokeWidth="1.6"
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
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.7v3.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" />
  </svg>
);

const FieldLabel = ({
  children,
  className,
}: {
  children: string;
  className: string;
}): JSX.Element => (
  <div className={`mt-6 flex items-center gap-2 ${className}`}>
    <span className="text-[11.5px] font-semibold">{children}</span>
    <InfoIcon />
  </div>
);

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Deliberately self-contained (no props, no state) and deliberately off-system:
 * the frame's own dark palette is used as literal values instead of the app's
 * semantic tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-screen w-full bg-black [font-family:Inter,system-ui,sans-serif]"
  >
    <div className="mx-auto flex w-[254px] flex-col px-[18px] py-6">
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon size={8} />
        <span className="truncate text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-[13.5px] font-semibold">Add New Design</span>
      </div>

      <FieldLabel className="text-[#a4a4a3]">
        Personal Access Token
      </FieldLabel>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-[38px] w-full rounded-[4px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
      />

      <FieldLabel className="text-[#a3a3a2]">Design URL</FieldLabel>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-2 h-[38px] w-full rounded-[4px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-10 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
