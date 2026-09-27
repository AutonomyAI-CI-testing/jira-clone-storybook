import type { ReactNode } from "react";
import cx from "classix";

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 12 8"
    className="h-[6px] w-[10px] shrink-0"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[16px] w-[14px] shrink-0"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <span
    className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#a4a4a3] text-[10px] font-bold leading-none text-[#1a1a1a]"
    aria-hidden="true"
  >
    i
  </span>
);

const Field = ({
  label,
  placeholder,
  inputClass,
  placeholderClass,
}: {
  label: string;
  placeholder: string;
  inputClass: string;
  placeholderClass: string;
}) => (
  <div className="mt-4">
    <div className="mb-2 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(
        "h-[37px] w-full bg-[#272822] px-3 text-[11.5px] font-semibold outline-none",
        placeholderClass,
        inputClass
      )}
    />
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 py-5 font-['Inter',sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <ChevronUpIcon />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClass="border border-[#a5adad]"
      placeholderClass="placeholder:text-[#737470]"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClass="border-2 border-[#929291]"
      placeholderClass="placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex gap-4">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <span className="mt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

export default TestCard;
