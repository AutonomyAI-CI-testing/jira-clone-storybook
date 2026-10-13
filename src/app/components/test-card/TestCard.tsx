/**
 * TestCard — a static recreation of the "UI magician Agent" Figma smoke-test
 * frame. It is a test asset: no props, no state, no handlers.
 *
 * It sits deliberately outside the app's design-token system — the design's
 * palette (near-black panel, brown buttons) has no matching semantic token, and
 * the card must not re-skin when the app theme changes.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black p-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <GearIcon className="h-4 w-4" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-7"
      id="test-card-token"
      label="Personal Access Token"
      labelClassName="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="mt-3 h-9 border border-[#a5adad] text-[11.5px] leading-[13.92px]"
    />

    <Field
      className="mt-[11px]"
      id="test-card-url"
      label="Design URL"
      labelClassName="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      placeholder="https://www.figma.com/file/"
      inputClassName="mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px]"
    />

    <div className="mt-[22px] flex justify-end gap-4">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  className = "",
  id,
  label,
  labelClassName,
  placeholder,
  inputClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-7">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#b5b5b5]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={`w-full bg-[#272822] px-3 text-[#737470] placeholder:text-[#737470] ${inputClassName}`}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

const ChevronUpIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.4v3.9" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const GearIcon = ({ className = "" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  labelClassName: string;
  placeholder: string;
  inputClassName: string;
}

interface IconProps {
  className?: string;
}
