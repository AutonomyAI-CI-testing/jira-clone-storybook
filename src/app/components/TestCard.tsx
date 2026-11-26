import cx from "classix";

// Static, self-contained reproduction of the "UI magician Agent" Figma panel.
// Deliberately prop-less and stateless: it is a render target for the design-to-code
// smoke test, not a product component, so it carries no interactivity.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#1a1a1a] px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <FieldLabel label="Personal Access Token" tone="mt-7 text-[#a4a4a3]" />
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] font-primary text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <FieldLabel label="Design URL" tone="mt-[11px] text-[#a3a3a2]" />
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={ACTION_BUTTON}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ACTION_BUTTON =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] text-[#8c8078]";

const FieldLabel = ({
  label,
  tone,
}: {
  label: string;
  tone: string;
}): JSX.Element => (
  <div
    className={cx(
      "flex items-center gap-[18px] font-primary text-[11.5px] leading-[14px]",
      tone
    )}
  >
    <span>{label}</span>
    <InfoIcon className="h-[15px] w-[15px] shrink-0" />
  </div>
);

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v4.1" strokeLinecap="round" />
    <circle cx="8" cy="4.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <circle cx="12" cy="12" r="6.5" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
  </svg>
);
