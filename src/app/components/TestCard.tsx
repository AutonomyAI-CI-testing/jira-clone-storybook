/**
 * Static recreation of the "UI magician Agent" Figma panel.
 *
 * Self-contained by design: no props, no state, no data, no event handlers.
 * It is a smoke-test surface for the design and is not wired into any route.
 */

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

function Icon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

function SettingsIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Icon>
  );
}

function ChevronUpIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <path d="m6 15 6-6 6 6" />
    </Icon>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <Icon className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </Icon>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary-bold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon className="h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-4">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <span className="mt-12 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
}
