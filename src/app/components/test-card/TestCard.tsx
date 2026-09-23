import cx from "classix";

/**
 * Smoke-test component: a self-contained reproduction of the "UI magician Agent"
 * settings panel. Intentionally takes no props, holds no state and imports
 * nothing from the app — it is a fixture for checking that a Figma frame renders
 * as a React component, not a feature.
 *
 * Colours/spacing are literal values taken from the design and deliberately do
 * not use the app's semantic theme tokens, so the card renders the same whether
 * or not the app's CSS variables are loaded.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black p-5 font-['Inter',system-ui,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon width={8} height={5} className="shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUpIcon
        width={12}
        height={8}
        className="shrink-0 text-[#b2b2b1]"
      />
      <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      emphasized
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[87px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const BUTTON_LABELS = ["Awesome", "Prepare"];

const Field = ({
  label,
  placeholder,
  emphasized = false,
  className,
}: FieldProps): JSX.Element => (
  <div className={cx(className)}>
    <div className="flex items-center gap-3">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-[12px] w-full bg-[#272822] px-[19px] font-semibold placeholder:text-[#737470]",
        emphasized
          ? "h-[37px] border-2 border-[#929291] text-[10.5px]"
          : "h-[36px] border border-[#a5adad] text-[11.5px]"
      )}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  emphasized?: boolean;
  className?: string;
}

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
  className,
}: IconProps & SizeProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M4 16l8-8 8 8" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 10.8v5.6" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface SizeProps {
  width: number;
  height: number;
}

export default TestCard;
