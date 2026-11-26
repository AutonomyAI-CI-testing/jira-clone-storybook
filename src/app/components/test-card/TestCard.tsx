import cx from "classix";

/**
 * TestCard renders the "UI magician Agent" Figma frame as static markup.
 * It takes no props and holds no state: it exists to smoke-test the
 * design-to-component path, so spacing, colour and type are approximations of
 * the frame rather than pixel matches.
 */

/** The frame is a 254px panel with 20px gutters; both fields share this shell. */
const FIELD_CLASS = "mt-3 h-9 w-full bg-[#272822] px-3 text-2xs";

const ACTIONS = ["Awesome", "Prepare"];

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 16 12 9l7 7" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 10.5v6" />
    <path d="M12 7.6h.01" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  className,
  textClassName,
  children,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <label htmlFor={htmlFor} className={cx("text-2xs", textClassName)}>
      {children}
    </label>
    <InfoIcon className={cx("h-[15px] w-[15px] shrink-0", textClassName)} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black bg-[radial-gradient(140%_90%_at_50%_28%,#241a14_0%,#000000_72%)] px-5 py-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-4 w-3.5 shrink-0 text-[#a4a4a3]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <FieldLabel
        htmlFor="test-card-personal-access-token"
        className="mt-7"
        textClassName="text-[#a4a4a3]"
      >
        Personal Access Token
      </FieldLabel>
      <input
        id="test-card-personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          FIELD_CLASS,
          "border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
        )}
      />

      <FieldLabel
        htmlFor="test-card-design-url"
        className="mt-3"
        textClassName="text-[#a3a3a2]"
      >
        Design URL
      </FieldLabel>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          FIELD_CLASS,
          "border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]"
        )}
      />

      <div className="mt-6 flex gap-4">
        {ACTIONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldLabelProps {
  htmlFor: string;
  className?: string;
  textClassName?: string;
  children: React.ReactNode;
}

interface IconProps {
  className?: string;
}
