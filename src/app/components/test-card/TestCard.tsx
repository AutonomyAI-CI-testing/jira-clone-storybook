/**
 * TestCard — a static reproduction of the "UI magician Agent / Add New Design"
 * Figma frame. Smoke test only: no props, no state, no interactivity.
 *
 * The colours below are deliberate literals. The mock is a dark,
 * orange-accented panel and this repo's semantic token set is a light/dark
 * Jira-style system, so no token is close to them (nearest are all visibly
 * different shades). Sizes, spacings and copy come from the frame's extracted
 * style guide, not from eyeballing the image.
 */

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    <circle
      cx="7"
      cy="8"
      r="6.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeDasharray="1.7 2.7"
    />
  </svg>
);

interface ChevronUpProps {
  width: number;
  height: number;
  className?: string;
}

const ChevronUp = ({ width, height, className }: ChevronUpProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <path
      d="M7.5 7v3.8"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  /** Top margin and text colour shared by the label row (from the frame). */
  className: string;
  /** The frame's spacing between this label and its info icon. */
  infoClassName: string;
  /** Border, size and type treatment for this field's input (from the frame). */
  inputClassName: string;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
  infoClassName,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center">
      <label
        htmlFor={id}
        className="font-primary text-[11.5px] leading-[13.92px]"
      >
        {label}
      </label>
      <InfoIcon className={infoClassName} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-[211px] bg-[#272822] font-primary ${inputClassName}`}
    />
  </div>
);

const CardButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <p className="font-primary text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[28px] text-[#a4a4a3]"
      infoClassName="ml-[35px]"
      inputClassName="mt-[12px] h-[36px] border border-[#a5adad] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] text-[#a3a3a2]"
      infoClassName="ml-[17px]"
      inputClassName="mt-[11px] h-[37px] border-2 border-[#929291] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-[24px] flex gap-[17px]">
      <CardButton label="Awesome" />
      <CardButton label="Prepare" />
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
