import cx from "classix";

/**
 * TestCard — a static, self-contained replica of the "UI magician Agent" frame.
 *
 * Smoke test only: it renders the frame's regions in order so the
 * "Figma frame -> React component -> preview" path can be verified. It takes no
 * props and holds no state. The colours are literal values because the frame is
 * a dark design while the app's default theme is light.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pb-16 pt-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-sm text-[#e6e6e6]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Empty space the collapsed header area leaves above the form */}
      <div className="h-[70px]" />

      <div className="flex items-center gap-2">
        <ChevronUpIcon className="h-[8px] w-[12px]" />
        <h2 className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-5">
        <FieldLabel>Personal Access Token</FieldLabel>
        <FieldValue
          text="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="border border-[#a5adad] text-[#737470]"
        />
      </div>

      <div className="mt-4">
        <FieldLabel>Design URL</FieldLabel>
        <FieldValue
          text="https://www.figma.com/file/"
          className="border-2 border-[#929291] text-[#71726e]"
        />
      </div>

      <div className="mt-5 flex gap-[17px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-12 font-primary-bold text-sm text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2">
    <span className="font-primary-bold text-2xs text-[#a4a4a3]">
      {children}
    </span>
    <InfoIcon />
  </div>
);

const FieldValue = ({ text, className }: { text: string; className: string }) => (
  <div
    className={cx(
      "mt-2 flex h-[37px] w-full items-center rounded bg-[#272822] px-3 text-2xs",
      className
    )}
  >
    {text}
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] flex-1 rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
  >
    {children}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0 fill-none stroke-[#c9c9c9]"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-2.87 1.2v.17a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-2.9-1.2l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a2 2 0 0 1-1.87-1.7H2.6a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.6 7.6a1.7 1.7 0 0 0-.34-1.87l-.06-.06A2 2 0 1 1 7.03 2.84l.06.06a1.7 1.7 0 0 0 1.87.34h.08A1.7 1.7 0 0 0 10 1.5a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08A1.7 1.7 0 0 0 21.94 9h.17a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1.03z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    className={cx("h-[6px] w-[10px] shrink-0 fill-none stroke-[#c9c9c9]", className)}
    strokeWidth="1.6"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0 fill-none stroke-[#c9c9c9]"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v6" />
    <path d="M12 7.6v.1" />
  </svg>
);
