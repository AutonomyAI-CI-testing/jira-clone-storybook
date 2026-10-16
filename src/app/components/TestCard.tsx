import cx from "classix";

/**
 * Smoke-test card: a static reproduction of the attached Figma frame's
 * "UI magician Agent" panel. Self-contained — no props, no state, no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pt-5 pb-5"
  >
    <div className="flex items-start justify-between gap-2">
      <h1 className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="shrink-0 text-[#8b9291]" width={8} height={5} />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <ChevronUpIcon
        className="shrink-0 text-[#b2b2b1]"
        width={12}
        height={8}
      />
      <h2 className="font-primary-bold text-xs text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-7"
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad] placeholder:text-[#737470]"
    />

    <Field
      className="mt-3"
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="border-2 border-[#929291] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <TestButton label="Awesome" />
      <TestButton label="Prepare" />
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="mb-3 flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-2xs text-[#a4a4a3]"
      >
        {label}
      </label>
      <InfoIcon className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={cx(
        "h-9 w-full rounded-none bg-[#272822] px-4 font-primary text-2xs text-[#b5b5b5]",
        inputClassName,
      )}
    />
  </div>
);

const TestButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
  >
    {label}
  </button>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className, width, height }: ChevronIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.5 6 6 1.5 10.5 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    className={className}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.8v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName: string;
}

interface IconProps {
  className?: string;
}

interface ChevronIconProps extends IconProps {
  width: number;
  height: number;
}
