import cx from "classix";

/**
 * Smoke-test component built from the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: it takes no props, holds no state and touches no
 * data. The fields and buttons are inert look-alikes, so the frame can be
 * rendered on its own. Sizes, colours and type are approximations of the design
 * and are not part of the app's semantic token system.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-['Inter',sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearGlyph className="h-4 w-3.5 shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2.5">
      <ChevronUpGlyph className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <ChevronUpGlyph className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h3 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <Field
      className="mt-[28px]"
      id="test-card-personal-access-token"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      placeholderClassName="placeholder:text-[11.5px] placeholder:leading-[13.92px] placeholder:text-[#737470]"
      inputClassName="h-9 border border-[#a5adad]"
    />

    <Field
      className="mt-[9px]"
      id="test-card-design-url"
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/:"
      placeholderClassName="placeholder:text-[10.5px] placeholder:leading-[12.71px] placeholder:text-[#71726e]"
      inputClassName="h-[37px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

const Field = ({
  id,
  label,
  labelClassName,
  placeholder,
  placeholderClassName,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-2.5">
      <label
        htmlFor={id}
        className={cx(
          "text-[11.5px] leading-[13.92px] font-semibold",
          labelClassName
        )}
      >
        {label}
      </label>
      <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "w-full bg-[#272822] px-[19px] font-semibold text-[#d0d0d0] outline-none",
        placeholderClassName,
        inputClassName
      )}
    />
  </div>
);

const GearGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    className={className}
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.4v3.9" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface GlyphProps {
  className?: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  placeholderClassName: string;
  inputClassName: string;
  className?: string;
}
