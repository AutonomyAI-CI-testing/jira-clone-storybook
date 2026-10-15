import cx from "classix";

/**
 * TestCard — a static reproduction of the supplied Figma frame.
 *
 * Smoke-test component: it takes no props, holds no state, is not wired into
 * any route, and exists only to render the design on screen.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#121212] px-5 pb-5 pt-5"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUpIcon className="ml-[3px]" width={8} height={5} />
        <span className="max-w-[170px] truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-20 flex items-center gap-1">
        <ChevronUpIcon className="ml-1.5" width={12} height={8} />
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <Field
        className="mt-7"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-3"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="ml-6 mt-6 flex gap-[17px]">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <label className={cx("block", className)}>
    <span className="flex items-center gap-5">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      readOnly
      className={cx(
        "mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px]",
        "font-primary-bold text-[11.5px] leading-[13.92px] text-[#b5b5b5]",
        "placeholder:font-primary-bold placeholder:text-[11.5px] placeholder:text-[#737470]"
      )}
    />
  </label>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className={cx(
      "h-[37px] w-[85px] rounded bg-[#843a17]",
      "font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
    )}
  >
    {children}
  </button>
);

const ChevronUpIcon = ({
  width,
  height,
  className,
}: ChevronUpIconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="#b9b9b9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.4" stroke="#c9c9c9" strokeWidth="1.6" />
    <path
      d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"
      stroke="#c9c9c9"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="12" r="7.4" stroke="#c9c9c9" strokeWidth="1.6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="#a9a9a9" strokeWidth="1" />
    <path
      d="M7.5 6.9v3.3"
      stroke="#a9a9a9"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.8" fill="#a9a9a9" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

interface CardButtonProps {
  children: string;
}

interface ChevronUpIconProps {
  width: number;
  height: number;
  className?: string;
}
