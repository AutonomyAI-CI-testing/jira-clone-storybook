type GlyphProps = {
  className?: string;
};

type ChevronUpProps = GlyphProps & {
  width: number;
  height: number;
};

type FieldProps = {
  label: string;
  placeholder: string;
  boxClassName: string;
  inputClassName: string;
};

/** Settings cog: an inner ring plus a dashed outer ring standing in for the teeth. */
const GearGlyph = ({ className }: GlyphProps) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle
      cx="8"
      cy="8"
      r="6.2"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="1.7 3.17"
    />
  </svg>
);

const ChevronUp = ({ width, height, className }: ChevronUpProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
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

const InfoGlyph = ({ className }: GlyphProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.6V10.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

const Field = ({ label, placeholder, boxClassName, inputClassName }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoGlyph className="shrink-0 text-[#a4a4a3]" />
    </div>
    <div className={`mt-3 flex items-center border bg-[#272822] px-4 ${boxClassName}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`h-full w-full bg-transparent font-primary text-[11.5px] leading-[13.92px] ${inputClassName}`}
      />
    </div>
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1a1a1a] px-5 pt-5 pb-16 font-primary text-[#b0b0b0]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearGlyph className="mt-0.5 shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsible summary */}
      <div className="mt-4 flex items-center gap-2">
        <ChevronUp width={8} height={5} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-20">
        <div className="flex items-center gap-2">
          <ChevronUp width={12} height={8} className="shrink-0 text-[#b2b2b1]" />
          <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-11 space-y-3">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            boxClassName="h-9 border-[#a5adad]"
            inputClassName="text-[#737470] placeholder:text-[#737470]"
          />
          <Field
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            boxClassName="h-[37px] border-2 border-[#929291]"
            inputClassName="text-[#71726e] placeholder:text-[#71726e]"
          />
        </div>

        <div className="mt-6 flex justify-end gap-[17px]">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
