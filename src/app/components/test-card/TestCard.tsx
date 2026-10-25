import cx from "classix";

/**
 * TestCard — a static panel built from the "UI magician Agent" Figma frame.
 *
 * Self-contained by design: no props, no state, no data fetching. The frame
 * carries its own dark palette which has no counterpart in the app's theme
 * tokens, so its colours are written as literal Tailwind arbitrary values.
 */

const FIELD_INPUT =
  "h-[37px] w-full bg-[#272822] px-5 text-[11.5px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]";

const BUTTON = "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.4v2.2M7 12.4v2.2M1.4 8h2.2M10.4 8h2.2M3.05 4.05 4.6 5.6M9.4 10.4l1.55 1.55M10.95 4.05 9.4 5.6M4.6 10.4l-1.55 1.55"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.7" stroke="currentColor" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <path d="M7.5 6.9v3.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  emphasised?: boolean;
  className?: string;
}

const Field = ({ id, label, placeholder, emphasised = false, className }: FieldProps) => (
  <div className={cx("flex flex-col", className)}>
    <div className="mb-[11px] flex items-center gap-2 text-[#a4a4a3]">
      <label htmlFor={id} className="text-[11.5px] font-semibold leading-[14px]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        FIELD_INPUT,
        emphasised ? "border-2 border-[#929291]" : "border border-[#a5adad]"
      )}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#161616] p-5 font-['Inter',sans-serif]"
  >
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px] font-semibold leading-[16px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="text-[11.5px] font-semibold leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="text-[13.5px] font-semibold leading-[16px]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-[11px]"
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      emphasised
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      {ACTION_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
