import cx from "classix";

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

function ChevronUp({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      fill="none"
      className={cx("shrink-0", className)}
    >
      <path
        d="M1 6.5 6 1.5l5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GearIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={cx("shrink-0", className)}
    >
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="11"
          y="0.8"
          width="2"
          height="4.2"
          rx="1"
          fill="currentColor"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
    </svg>
  );
}

function InfoDot({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className={cx("shrink-0", className)}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="8" cy="4.9" r="0.95" fill="currentColor" />
      <rect x="7.15" y="6.9" width="1.7" height="4.9" rx="0.85" fill="currentColor" />
    </svg>
  );
}

interface FieldProps {
  className: string;
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
  placeholderClassName: string;
}

function Field({
  className,
  id,
  label,
  placeholder,
  inputClassName,
  placeholderClassName,
}: FieldProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-5">
        <label
          htmlFor={id}
          className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          {label}
        </label>
        <InfoDot className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className={cx(
          "mt-3 w-full bg-[#272822] px-4 text-[11.5px] leading-[14px] text-[#b5b5b5]",
          inputClassName,
          placeholderClassName
        )}
      />
    </div>
  );
}

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] min-h-[508px] bg-[#1a1a1a] px-5 py-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
        <span className="truncate font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px]">
        <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
        <h3 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <Field
        className="mt-[30px]"
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputClassName="h-9 border border-[#a5adad]"
        placeholderClassName="placeholder:text-[#737470]"
      />

      <Field
        className="mt-[11px]"
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        inputClassName="h-[37px] border-2 border-[#929291]"
        placeholderClassName="placeholder:text-[10.5px] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
}
