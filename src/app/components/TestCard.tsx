import cx from "classix";
import type { ReactNode } from "react";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[family-name:Inter] text-[#b5b5b5]"
    >
      {/* Header: title + settings gear */}
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold">UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[10px] text-[#8b9291]">
        <ChevronUpIcon />
        <span className="text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[62px] flex items-center gap-[10px] text-[#b2b2b1]">
        <ChevronUpIcon />
        <h2 className="text-[13.5px] font-semibold">Add New Design</h2>
      </div>

      <Field
        className="mt-[26px]"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-[18px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        emphasized
      />

      {/* Actions */}
      <div className="mt-[18px] flex gap-[17px] pl-[24px]">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[40px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  emphasized,
  className,
}: FieldProps): JSX.Element => {
  return (
    <div className={className}>
      <div className="flex items-center gap-[8px] text-[#a4a4a3]">
        <span className="text-[11.5px] font-semibold">{label}</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className={cx(
          "mt-[12px] h-[36px] w-full rounded-[2px] bg-[#272822] px-[10px]",
          "text-[11.5px] font-semibold text-[#a4a4a3] placeholder:text-[#737470]",
          "focus:outline-none",
          emphasized ? "border-2 border-[#929291]" : "border border-[#a5adad]"
        )}
      />
    </div>
  );
};

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <button
      type="button"
      className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#c2bdb7]"
    >
      {children}
    </button>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  emphasized?: boolean;
  className?: string;
}
