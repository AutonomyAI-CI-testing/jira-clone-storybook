import cx from "classix";

/**
 * Smoke-test component reproducing the "UI magician Agent" frame.
 * Fully self-contained: no props, no state, no imports from other components.
 * Colours and sizes come from the frame's style guide as Tailwind arbitrary
 * values, because this repo's Tailwind config replaces the default palette.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[20px] flex items-center gap-2">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Breathing room before the form section */}
      <div className="mt-[56px]" />

      {/* Section: Add New Design */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <Field
        className="mt-[26px]"
        label="Personal Access Token"
        labelClassName="text-[#a4a4a3]"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        placeholderClassName="placeholder:text-[#737470]"
        inputClassName="border border-[#a5adad]"
      />

      <Field
        className="mt-[18px]"
        label="Design URL"
        labelClassName="text-[#a3a3a2]"
        placeholder="https://www.figma.com/file/"
        placeholderClassName="placeholder:text-[#71726e]"
        inputClassName="border-2 border-[#929291]"
      />

      {/* Actions */}
      <div className="mt-[28px] flex gap-[17px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Section: Recent Breakdowns */}
      <h2 className="mt-[60px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#c9c9c9]"
  >
    {children}
  </button>
);

const Field = ({
  className,
  label,
  labelClassName,
  placeholder,
  placeholderClassName,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className={cx("text-[11.5px] font-semibold", labelClassName)}>
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-[10px] h-[36px] w-full rounded-[2px] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] outline-none",
        placeholderClassName,
        inputClassName
      )}
    />
  </div>
);

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
    className="shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#b5b5b5]"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="shrink-0 text-[#8b9291]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface ActionButtonProps {
  children: string;
}

interface FieldProps {
  className: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  placeholderClassName: string;
  inputClassName: string;
}
