import cx from "classix";

/**
 * Smoke-test card reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained by design: no props, no state, no behaviour. The frame is a
 * dark panel, so its own palette is used directly — the app's semantic tokens
 * are light-theme values and would invert the design.
 */

const ChevronUp = () => (
  <svg
    viewBox="0 0 24 16"
    className="h-4 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 14 L12 4 L22 14" />
  </svg>
);

const InfoCircle = () => (
  <svg
    viewBox="0 0 30 30"
    className="h-[30px] w-[30px] shrink-0"
    aria-hidden="true"
  >
    <circle
      cx="15"
      cy="15"
      r="13.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    />
    <path
      d="M15 13.5 v8.5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
    />
    <circle cx="15" cy="8.5" r="1.9" fill="currentColor" />
  </svg>
);

const Gear = () => (
  <svg viewBox="0 0 28 32" className="h-8 w-7 shrink-0" aria-hidden="true">
    <circle
      cx="14"
      cy="16"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
    />
    <g stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
      <path d="M14 3 v4.5" />
      <path d="M14 24.5 v4.5" />
      <path d="M3.5 9.5 l3.9 2.3" />
      <path d="M20.6 20.2 l3.9 2.3" />
      <path d="M24.5 9.5 l-3.9 2.3" />
      <path d="M7.4 20.2 l-3.9 2.3" />
    </g>
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps) => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-3 text-[#a4a4a3]">
      <label
        htmlFor={id}
        className="font-primary-bold text-[23px] leading-none"
      >
        {label}
      </label>
      <InfoCircle />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-6 w-full bg-[#272822] px-6 font-primary-bold text-[#737470] placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-black px-10 pb-10 pt-10 font-primary text-[#b5b5b5]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[27px] leading-none">
          UI magician Agent
        </span>
        <Gear />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-9 flex items-center gap-3 text-[#8b9291]">
        <ChevronUp />
        <span className="truncate text-[23px] leading-none">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[150px] flex items-center gap-3">
        <ChevronUp />
        <span className="font-primary-bold text-[27px] leading-none text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-14"
        inputClassName="h-[72px] border border-[#a5adad] text-[23px]"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[22px]"
        inputClassName="h-[74px] border-2 border-[#929291] text-[21px]"
      />

      {/* Actions */}
      <div className="mt-[46px] flex gap-4">
        {["Awesome", "Prepare"].map((action) => (
          <button
            key={action}
            type="button"
            className="h-[74px] w-[170px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-[23px] text-[#8c8078]"
          >
            {action}
          </button>
        ))}
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[92px] font-primary-bold text-[27px] leading-none text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}

export default TestCard;
