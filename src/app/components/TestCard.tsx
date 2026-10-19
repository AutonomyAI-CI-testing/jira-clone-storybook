export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] px-5 py-5 font-[Inter,CircularStdMedium,sans-serif]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsGlyph className="h-4 w-[14px] shrink-0 text-[#b0b0b0]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpGlyph className="h-[5px] w-2 shrink-0 text-[#b0b0b0]" />
        <p className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <section className="mt-[77px]">
        <div className="flex items-center gap-[5px]">
          <ChevronUpGlyph className="h-2 w-3 shrink-0 text-[#b0b0b0]" />
          <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        <div className="mt-[28px] flex flex-col gap-[11px]">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            inputClassName="h-9 border border-[#a5adad]"
          />
          <Field
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
            inputClassName="h-[37px] border-2 border-[#929291]"
          />
        </div>

        <div className="mt-[22px] flex gap-[17px] pl-6">
          {["Awesome", "Prepare"].map((label) => (
            <button
              key={label}
              type="button"
              className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => {
  return (
    <div>
      <div className="flex items-center gap-6">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          {label}
        </span>
        <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#b0b0b0]" />
      </div>
      <input
        type="text"
        readOnly
        placeholder={placeholder}
        className={`mt-3 block w-[211px] bg-[#272822] px-[18px] text-[11.5px] font-semibold leading-[13.92px] text-[#b5b5b5] placeholder:text-[#737470] ${inputClassName}`}
      />
    </div>
  );
};

const SettingsGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 14 16" fill="none" aria-hidden="true" className={className}>
    <path
      d="M13.57 6.24A6.8 6.8 0 0 1 13.57 9.76L11.54 9.84A4.9 4.9 0 0 0 11.51 9.91L12.89 11.40A6.8 6.8 0 0 1 10.40 13.89L8.91 12.51A4.9 4.9 0 0 0 8.84 12.54L8.76 14.57A6.8 6.8 0 0 1 5.24 14.57L5.16 12.54A4.9 4.9 0 0 0 5.09 12.51L3.60 13.89A6.8 6.8 0 0 1 1.11 11.40L2.49 9.91A4.9 4.9 0 0 0 2.46 9.84L0.43 9.76A6.8 6.8 0 0 1 0.43 6.24L2.46 6.16A4.9 4.9 0 0 0 2.49 6.09L1.11 4.60A6.8 6.8 0 0 1 3.60 2.11L5.09 3.49A4.9 4.9 0 0 0 5.16 3.46L5.24 1.43A6.8 6.8 0 0 1 8.76 1.43L8.84 3.46A4.9 4.9 0 0 0 8.91 3.49L10.40 2.11A6.8 6.8 0 0 1 12.89 4.60L11.51 6.09A4.9 4.9 0 0 0 11.54 6.16Z"
      fill="currentColor"
    />
    <circle cx="7" cy="8" r="2.2" fill="#1C1D17" />
  </svg>
);

const ChevronUpGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.2 6 1.4l5 4.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg viewBox="0 0 15 15" fill="none" aria-hidden="true" className={className}>
    <circle cx="7.5" cy="7.5" r="7" fill="currentColor" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="#1C1D17" />
    <rect
      x="6.85"
      y="6.5"
      width="1.3"
      height="4.4"
      rx="0.65"
      fill="#1C1D17"
    />
  </svg>
);

interface GlyphProps {
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}
