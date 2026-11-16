/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke-test component: no props, no state, no data. It is not wired into any route.
 */

const GearIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.2" />
    <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M11.4 8h1.9" />
      <path d="M10.11 4.89l1.34-1.34" />
      <path d="M7 3.6V1.7" />
      <path d="M3.89 4.89L2.55 3.55" />
      <path d="M2.6 8H0.7" />
      <path d="M3.89 11.11l-1.34 1.34" />
      <path d="M7 12.4v1.9" />
      <path d="M10.11 11.11l1.34 1.34" />
    </g>
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}): JSX.Element => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    className={className}
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1" />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className: string;
  inputClassName: string;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-[10px]">
      <label
        htmlFor={id}
        className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <InfoIcon className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      autoComplete="off"
      className={inputClassName}
    />
  </div>
);

const PanelButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1e1e1e] px-5 pt-5 font-sans text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon className="mt-[2px] shrink-0" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[75px] flex items-center gap-[9px] text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} className="shrink-0" />
      <span>Add New Design</span>
    </div>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[28px]"
      inputClassName="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px]"
      inputClassName="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex items-center justify-center gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h3 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
