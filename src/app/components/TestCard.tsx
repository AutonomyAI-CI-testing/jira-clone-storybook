/**
 * TestCard — a self-contained smoke-test component.
 *
 * Reproduces the cropped "Test Page - Simple (FOR TESTING)" frame: the dark
 * "UI magician Agent" settings panel. It takes no props and reads no data, so
 * it renders identically wherever it is mounted.
 *
 * Fidelity is deliberately approximate — the frame's dark palette has no
 * counterpart in the semantic token layer, so the colours are written as
 * Tailwind arbitrary values.
 */

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#000000] px-5 pt-5 pb-[62px] font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <IconSlot>
        <ChevronUpIcon width={8} height={5} />
      </IconSlot>
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[62px] flex items-center gap-2 text-[#b2b2b1]">
      <IconSlot>
        <ChevronUpIcon width={12} height={8} />
      </IconSlot>
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <FieldLabel className="mt-[43px] text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <Field placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />

    <FieldLabel className="mt-3 text-[#a3a3a2]">Design URL</FieldLabel>
    <Field placeholder="https://www.figma.com/file/" emphasis />

    {/* Actions */}
    <div className="mt-5 flex gap-[17px] pl-6">
      <RustButton>Awesome</RustButton>
      <RustButton>Prepare</RustButton>
    </div>

    <span className="mt-[45px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

/** A label paired with the small info glyph that follows it. */
const FieldLabel = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-[15px] ${className}`}>
    <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
      {children}
    </span>
    <InfoIcon />
  </div>
);

/** One of the two bordered, olive-black field boxes with its placeholder. */
const Field = ({
  placeholder,
  emphasis = false,
}: {
  placeholder: string;
  emphasis?: boolean;
}) => (
  <div
    className={`mt-3 flex h-[36px] w-full items-center bg-[#272822] px-[19px] ${
      emphasis ? "border-2 border-[#929291]" : "border border-[#a5adad]"
    }`}
  >
    <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470]">
      {placeholder}
    </span>
  </div>
);

const RustButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

/** Fixed-width column so the chevrons in both rows line up with each other. */
const IconSlot = ({ children }: { children: React.ReactNode }) => (
  <span className="flex w-4 shrink-0 justify-center">{children}</span>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.3v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="2.6" />
    <circle cx="8" cy="8" r="5.6" />
    <path d="M8 0.6v1.8M8 13.6v1.8M0.6 8h1.8M13.6 8h1.8M2.7 2.7l1.3 1.3M12 12l1.3 1.3M13.3 2.7 12 4M4 12l-1.3 1.3" />
  </svg>
);

export default TestCard;
