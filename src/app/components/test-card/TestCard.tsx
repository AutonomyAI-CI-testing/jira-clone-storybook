import cx from "classix";

interface GlyphProps {
  className?: string;
}

const GearGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    aria-hidden="true"
    className={cx("h-4 w-4 shrink-0", className)}
  >
    <circle cx="12" cy="12" r="6.5" />
    <circle cx="12" cy="12" r="3" />
    <path d="M18.5 12H21M16.6 7.4l1.76-1.76M12 5.5V3M7.4 7.4 5.64 5.64M5.5 12H3M7.4 16.6l-1.76 1.76M12 18.5V21M16.6 16.6l1.76 1.76" />
  </svg>
);

const ChevronUpGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.1}
    strokeLinecap="round"
    aria-hidden="true"
    className={cx("h-[15px] w-[15px] shrink-0", className)}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4.2M8 4.6h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  labelClassName: string;
  placeholder: string;
  inputClassName: string;
}

const Field = ({
  label,
  labelClassName,
  placeholder,
  inputClassName,
}: FieldProps) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-1.5">
      <span
        className={cx(
          "font-primary-bold text-[11.5px] leading-[13.92px]",
          labelClassName
        )}
      >
        {label}
      </span>
      <InfoGlyph className={labelClassName} />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      aria-label={label}
      className={cx(
        "w-full font-primary-bold outline-none",
        inputClassName
      )}
    />
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearGlyph className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpGlyph className="h-[5px] w-2 text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpGlyph className="h-2 w-3 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <Field
        label="Personal Access Token"
        labelClassName="text-[#a4a4a3]"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputClassName="mt-3 h-9 border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <Field
        label="Design URL"
        labelClassName="text-[#a3a3a2]"
        placeholder="https://www.figma.com/file/:"
        inputClassName="mt-[11px] h-[37px] border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
