/**
 * TestCard — a static, self-contained rendering of the "UI magician Agent" panel
 * from the attached Figma frame. It takes no props, holds no state and has no
 * behaviour; it exists as a smoke test for the Figma-to-component path.
 *
 * The frame carries its own dark palette, which has no equivalent in this app's
 * semantic theme tokens, so its values are written here as literal arbitrary
 * values rather than mapped onto tokens that mean something else.
 */

/** Weight 600 in the frame maps to the design system's Bold family. */
const LABEL_TYPE = "font-primary-bold text-[11.5px] leading-[13.92px]";
const HEADING_TYPE = "font-primary-bold text-[13.5px] leading-[16.34px]";

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
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
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
  >
    <path d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`} />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a5adad]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.75"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" />
  </svg>
);

const LabelledField = ({
  id,
  label,
  placeholder,
  placeholderType,
  fieldClassName,
}: {
  id: string;
  label: string;
  placeholder: string;
  placeholderType: string;
  fieldClassName: string;
}): JSX.Element => (
  <>
    <div className="flex items-center gap-6">
      <label htmlFor={id} className={`${LABEL_TYPE} text-[#a4a4a3]`}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={`w-full bg-[#272822] text-[#737470] placeholder:text-[#737470] ${placeholderType} ${fieldClassName}`}
    />
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-hidden bg-[#000000] px-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className={`${HEADING_TYPE} text-[#b5b5b5]`}>
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center">
      <ChevronUpIcon width={8} height={5} />
      <span className={`${LABEL_TYPE} ml-[9px] text-[#8b9291]`}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center">
      <ChevronUpIcon width={12} height={8} />
      <span className={`${HEADING_TYPE} ml-[5px] text-[#b2b2b1]`}>
        Add New Design
      </span>
    </div>

    <div className="mt-[43px]">
      <LabelledField
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        placeholderType="text-[11.5px] leading-[13.92px]"
        fieldClassName="h-9 border border-[#a5adad] pl-[19px]"
      />
    </div>

    <div className="mt-[11px]">
      <LabelledField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        placeholderType="text-[10.5px] leading-[12.71px]"
        fieldClassName="h-[37px] border-2 border-[#929291] pl-5"
      />
    </div>

    <div className="ml-6 mt-[22px] flex gap-4">
      <button
        type="button"
        className={`${LABEL_TYPE} h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]`}
      >
        Awesome
      </button>
      <button
        type="button"
        className={`${LABEL_TYPE} h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]`}
      >
        Prepare
      </button>
    </div>

    <h3 className={`${HEADING_TYPE} mt-[47px] text-[#b0b0b0]`}>
      Recent Breakdowns
    </h3>
  </div>
);
