/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * frame (254x508). It is a smoke test for the design-to-component path, not a
 * product surface: it takes no props, holds no state, is wired to no route, and
 * its inputs and buttons are static.
 *
 * The frame's palette has no counterpart in the app's semantic tokens, so the
 * design's own values are used directly.
 */

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 15 15" fill="none" className={className} aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1" />
    <circle cx="7.5" cy="4.9" r="0.75" fill="currentColor" />
    <path
      d="M7.5 6.9v3.4"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const BUTTON_LABELS = ["Awesome", "Prepare"];

interface FieldProps {
  label: string;
  placeholder: string;
  labelRowClassName: string;
  fieldClassName: string;
  placeholderClassName: string;
}

const Field = ({
  label,
  placeholder,
  labelRowClassName,
  fieldClassName,
  placeholderClassName,
}: FieldProps): JSX.Element => (
  <>
    <div className={`flex items-center gap-[8px] ${labelRowClassName}`}>
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <div className={`flex w-[211px] items-center pl-[18px] ${fieldClassName}`}>
      <span className={placeholderClassName}>{placeholder}</span>
    </div>
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-[20px] pb-[62px] pt-[20px] font-[Inter,system-ui,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-[16px] w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-[8px] shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUp className="h-[8px] w-[12px] shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      labelRowClassName="mt-[28px]"
      fieldClassName="mt-[12px] h-[36px] border border-[#a5adad] bg-[#272822]"
      placeholderClassName="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      labelRowClassName="mt-[11px]"
      fieldClassName="mt-[11px] h-[37px] border-2 border-[#929291] bg-[#272822]"
      placeholderClassName="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]"
    />

    <div className="mt-[20px] flex gap-[17px] pl-[24px]">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
