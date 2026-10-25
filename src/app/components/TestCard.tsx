import cx from "classix";

/**
 * TestCard renders the "UI magician Agent" Figma panel as a static card.
 *
 * Self-contained: it takes no props and holds no state, and nothing in the app
 * renders it. The root element carries id="testElem" for test lookups.
 *
 * The panel is deliberately outside the theme layer — its charcoal surface and
 * burnt-orange buttons have no equivalent semantic token, so their values are
 * written directly rather than through the theme variables.
 */

type FieldProps = {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
};

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg viewBox="0 0 16 16" className="h-[15px] w-[15px]" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.9" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 7.2v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" />
  </svg>
);

const Field = ({ label, placeholder, className, inputClassName }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <span className="font-primary-bold text-[11.5px] leading-[14px]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      aria-label={label}
      className={cx(
        "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470] focus:outline-none",
        inputClassName
      )}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1f1f1f] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px]">UI magician Agent</span>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#b5b5b5] transition-colors duration-100 hover:text-white"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-[8px]" />
      <span className="font-primary-bold text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon className="h-[8px] w-[12px]" />
      <span className="font-primary-bold text-[13.5px] leading-[16px]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mt-5 flex justify-center gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078] transition-colors duration-100 hover:bg-[#9a4520]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
