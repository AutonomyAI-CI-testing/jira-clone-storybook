import type { ReactNode } from "react";

/**
 * The panel is a reproduction of an external dark design, so its colours are kept
 * as literal values instead of app theme tokens: the semantic tokens resolve to the
 * Jira Clone palette, which this panel deliberately does not use.
 */
const PANEL_BACKGROUND = "bg-[#0e0e0e]";
const FIELD_INPUT =
  "mt-3 h-9 w-[211px] bg-[#272822] px-3 font-primary-bold text-[11.5px] leading-[13.92px] text-[#b5b5b5] outline-none placeholder:font-primary-bold";

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.8l5 4.7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.9v3.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-3.5 shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
  className: string;
}

const Field = ({
  id,
  label,
  placeholder,
  inputClassName,
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={`flex w-[254px] flex-col px-5 py-5 ${PANEL_BACKGROUND}`}
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      id="testElem-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-7"
      inputClassName={`${FIELD_INPUT} border border-[#a5adad] placeholder:text-[#737470]`}
    />

    <Field
      id="testElem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px]"
      inputClassName={`${FIELD_INPUT} border-2 border-[#929291] text-[10.5px] placeholder:text-[10.5px] placeholder:text-[#71726e]`}
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
