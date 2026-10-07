import cx from "classix";

/**
 * TestCard
 *
 * A self-contained, static smoke-test panel: an approximate reproduction of the
 * "UI magician Agent" Figma frame. It exists only to confirm that a design can be
 * turned into a rendering React component, so it takes no props, is wired into no
 * route, story or barrel export, and its spacing, colour and type are deliberate
 * approximations rather than design-accurate values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col rounded-lg bg-black p-5 font-[Inter,sans-serif]"
  >
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon />
    </header>

    <div className="mb-20 flex items-center gap-2">
      <ChevronUpIcon />
      <span className="truncate text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mb-5 flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="text-[15px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mb-5"
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad]"
    />

    <Field
      className="mb-10"
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mb-12 flex gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] rounded-[4px] bg-[#843a17] px-4 text-[11.5px] font-semibold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="text-[15px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;

/** Read-only decorative field: a labelled input. Non-interactive by design. */
const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={id} className="text-[11.5px] text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "h-9 w-full rounded-[4px] bg-[#272822] px-3 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName?: string;
  className?: string;
}

const iconClassName = "shrink-0";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-[18px] w-[18px] text-[#b5b5b5]", iconClassName)}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-3 w-3 text-[#b2b2b1]", iconClassName)}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-3.5 w-3.5 text-[#a4a4a3]", iconClassName)}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
