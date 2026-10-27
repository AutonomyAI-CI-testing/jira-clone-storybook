/**
 * TestCard — a self-contained, static card built from the Figma smoke-test
 * frame "Test Page - Simple (FOR TESTING)".
 *
 * It is a throwaway smoke test, not production UI: it takes no props, holds no
 * state, and every piece of content is fixed. Its colours are the design's
 * literal hexes rather than semantic theme tokens on purpose — this panel has
 * no equivalent in the app's palette, so tokenising it would misrepresent the
 * design and make the card re-skin with the app theme.
 */

const BUTTON_CLASSES =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#b5b5b5]"
        >
          <SettingsIcon />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
        <ChevronUp className="h-[5px] w-2 shrink-0" />
        <span className="text-[11.5px] leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <ChevronUp className="h-2 w-3 shrink-0" />
        <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        labelClassName="text-[#a4a4a3]"
        inputClassName="mt-[12px] h-9 border border-[#a5adad] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[28px]"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        labelClassName="text-[#a3a3a2]"
        inputClassName="mt-[11px] h-[37px] border-2 border-[#929291] px-[18px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
        placeholder="https://www.figma.com/file/"
        className="mt-[11px]"
      />

      <div className="mt-[22px] flex justify-end gap-4">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASSES}>
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  id,
  label,
  labelClassName,
  inputClassName,
  placeholder,
  className,
}: FieldProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="flex items-center gap-5">
        <label
          htmlFor={id}
          className={`text-[11.5px] leading-[14px] ${labelClassName}`}
        >
          {label}
        </label>
        <InfoIcon />
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className={`w-full bg-[#272822] outline-none ${inputClassName}`}
      />
    </div>
  );
};

const ChevronUp = ({ className }: IconProps): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 6 L6 1.5 L11 6" />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[15px] w-[15px] shrink-0 text-[#a5adad]"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
};

const SettingsIcon = (): JSX.Element => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-3.5"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
};

interface IconProps {
  className: string;
}

interface FieldProps {
  id: string;
  label: string;
  labelClassName: string;
  inputClassName: string;
  placeholder: string;
  className: string;
}
