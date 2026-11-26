/**
 * TestCard — a self-contained rendering of the "UI magician Agent" Figma frame.
 *
 * It takes no props and holds no state. Spacing, colour and type are read from
 * the frame's extracted style guide and are deliberate approximations of it.
 *
 * The panel's dark-grey/rust palette has no matching semantic token in this
 * repo's theme, so its values are written as Tailwind arbitrary values rather
 * than design tokens — this component is not part of the product's themed
 * surfaces.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden rounded-[8px] bg-[#1e1e1e] px-[20px] pt-[20px] font-primary"
  >
    {/* Panel title and its settings affordance. */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    {/* Collapsed row. */}
    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <span className="text-[#c9c9c9]">
        <ChevronUp width={8} height={5} />
      </span>
      <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading. */}
    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <span className="text-[#c9c9c9]">
        <ChevronUp width={12} height={8} />
      </span>
      <h3 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <Field className="mt-[28px]" spec={PERSONAL_ACCESS_TOKEN_FIELD} />
    <Field className="mt-[11px]" spec={DESIGN_URL_FIELD} />

    {/* Action pair. */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);

/** A labelled text field: label + info icon, then the input box itself. */
const Field = ({ spec, className }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center">
      <label
        htmlFor={spec.id}
        className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        {spec.label}
      </label>
      <span className={spec.infoIconClassName}>
        <InfoIcon />
      </span>
    </div>
    <input
      id={spec.id}
      type="text"
      placeholder={spec.placeholder}
      className={`mt-[12px] w-full bg-[#272822] font-primary text-[#b5b5b5] ${spec.inputClassName} ${spec.placeholderClassName}`}
    />
  </div>
);

/** One of the frame's two rust action buttons. */
const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078] hover:bg-[#95421b] active:bg-[#733413]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a8a8a8]"
  >
    <circle cx="7.5" cy="7.5" r="2.1" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="7.5" r="4.7" stroke="currentColor" strokeWidth="1.2" />
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M7.5 0.6v1.7M7.5 12.7v1.7M0.6 7.5h1.7M12.7 7.5h1.7M2.62 2.62l1.2 1.2M11.18 11.18l1.2 1.2M12.38 2.62l-1.2 1.2M3.82 11.18l-1.2 1.2" />
    </g>
  </svg>
);

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.7v4.2"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldSpec {
  /** Ties the visible label to its input. */
  id: string;
  label: string;
  placeholder: string;
  /** Spacing and colour of the info icon that follows the label. */
  infoIconClassName: string;
  /** Box height, border and inner padding. */
  inputClassName: string;
  /** Placeholder size and colour. */
  placeholderClassName: string;
}

interface FieldProps {
  spec: FieldSpec;
  className?: string;
}

const PERSONAL_ACCESS_TOKEN_FIELD: FieldSpec = {
  id: "personal-access-token",
  label: "Personal Access Token",
  placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  infoIconClassName: "ml-[26px] text-[#a4a4a3]",
  inputClassName: "h-[36px] border border-[#a5adad] px-[19px]",
  placeholderClassName:
    "placeholder:font-primary placeholder:text-[11.5px] placeholder:text-[#737470]",
};

const DESIGN_URL_FIELD: FieldSpec = {
  id: "design-url",
  label: "Design URL",
  placeholder: "https://www.figma.com/file/:",
  infoIconClassName: "ml-[20px] text-[#a4a4a3]",
  inputClassName: "h-[37px] border-2 border-[#929291] px-[18px]",
  placeholderClassName:
    "placeholder:font-primary placeholder:text-[10.5px] placeholder:text-[#71726e]",
};
