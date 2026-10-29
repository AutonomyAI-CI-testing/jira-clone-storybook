import cx from "classix";

/**
 * Smoke-test replica of the "UI magician Agent" frame.
 * Static markup only: no props, no state, no interactivity.
 */

const FIELD_CLASS =
  "w-full rounded-none bg-[#272822] px-[18px] text-2xs font-primary-bold";

const ACTION_LABELS = ["Awesome", "Prepare"];

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    aria-hidden
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`} />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  className,
  children,
}: FieldLabelProps): JSX.Element => (
  <div className={cx("flex items-center gap-5", className)}>
    <label htmlFor={htmlFor} className="font-primary-bold text-2xs">
      {children}
    </label>
    <InfoIcon />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black pb-[62px] pl-5 pr-[23px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="font-primary-bold text-sm">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="font-primary-bold text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="font-primary-bold text-sm">Add New Design</span>
    </div>

    <div className="mt-[28px]">
      <FieldLabel htmlFor="test-card-token" className="text-[#a4a4a3]">
        Personal Access Token
      </FieldLabel>
    </div>
    <input
      id="test-card-token"
      type="text"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        FIELD_CLASS,
        "mt-3 h-9 border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
      )}
    />

    <div className="mt-[11px]">
      <FieldLabel htmlFor="test-card-url" className="text-[#a3a3a2]">
        Design URL
      </FieldLabel>
    </div>
    <input
      id="test-card-url"
      type="text"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={cx(
        FIELD_CLASS,
        "mt-[11px] h-[37px] border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]"
      )}
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] font-primary-bold text-sm text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldLabelProps {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}
