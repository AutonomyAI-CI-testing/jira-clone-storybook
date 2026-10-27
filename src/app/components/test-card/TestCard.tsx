import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" Figma frame (254x508).
 *
 * Deliberately self-contained: no props, no state, no data. The frame's own
 * colours and pixel sizes are kept as Tailwind arbitrary values because that
 * palette sits outside the product's semantic token set — nothing here is a
 * reusable design-system primitive.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#111111] px-5 pt-5 font-primary text-[#b5b5b5]"
  >
    <header className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </header>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp className="h-2 w-3 text-[#d0d0d0]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[28px]"
      inputClassName="h-9 border border-[#a5adad] placeholder:text-[11.5px] placeholder:text-[#737470]"
    />

    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px]"
      inputClassName="h-[37px] border-2 border-[#929291] placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ChevronUp = ({ className = "" }: ChevronProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path d="M1 6.5 6 1.5 11 6.5" vectorEffect="non-scaling-stroke" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-4 shrink-0 text-[#c9c9c9]"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoDot = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#8f8f8e]"
  >
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 11.2v5" />
    <circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  className = "",
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={cx("w-[211px]", className)}>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <InfoDot />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className={cx(
        "mt-3 w-full bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#d0d0d0] outline-none",
        inputClassName
      )}
    />
  </div>
);

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#96431b]"
  >
    {children}
  </button>
);

interface ChevronProps {
  className?: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName: string;
}

interface PanelButtonProps {
  children: string;
}
