/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" frame.
 *
 * Smoke test: no props, no state and no imports. Every string is hardcoded and
 * the four small icons are inlined as SVG so this stays a single file.
 *
 * Colours and type come straight from the frame, so they are written as
 * arbitrary values rather than repo design tokens — the layout is deliberately
 * approximate and is not meant to join the semantic token set.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-[Inter,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold">UI magician Agent</h1>
        <GearIcon className="text-[#b5b5b5]" />
      </div>

      <div className="mt-2 flex items-center gap-2 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <h2 className="text-[13.5px] font-semibold">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        borderClassName="border border-[#a5adad]"
      />
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        borderClassName="border-2 border-[#929291]"
      />

      <div className="mt-6 flex gap-[17px]">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[28px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const BUTTON_CLASSES =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#d5cdc8]";

const Field = ({ label, placeholder, borderClassName }: FieldProps) => {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-1.5">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          {label}
        </span>
        <InfoCircleIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={`mt-2 h-[36px] w-full bg-[#272822] px-3 text-[11.5px] text-[#d0d0d0] outline-none placeholder:text-[#737470] ${borderClassName}`}
      />
    </div>
  );
};

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  borderClassName: string;
}

interface IconProps {
  className?: string;
}
