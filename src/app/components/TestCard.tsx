import type { ReactNode } from "react";

const ChevronUp = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoCircle = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.2" />
    <path d="M12 11v5.2" strokeLinecap="round" />
    <circle cx="12" cy="7.6" r="1.05" fill="currentColor" stroke="none" />
  </svg>
);

const Gear = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface CollapsibleLabelProps {
  children: ReactNode;
  className?: string;
}

const CollapsibleLabel = ({
  children,
  className = "",
}: CollapsibleLabelProps): JSX.Element => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="shrink-0 text-[#b5b5b5]">
      <ChevronUp />
    </span>
    <span className="truncate">{children}</span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}

const Field = ({
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2 text-[11.5px] text-[#a4a4a3]">
      <span>{label}</span>
      <span className="text-[#b5b5b5]">
        <InfoCircle />
      </span>
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={`mt-2 h-[36px] w-[211px] max-w-full rounded-[2px] bg-[#272822] px-3 font-[monospace] text-[11.5px] text-[#b5b5b5] outline-none placeholder:text-[#737470] ${inputClassName}`}
    />
  </div>
);

const actionButtonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#cfc7c2]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <Gear />
        </span>
      </div>

      <CollapsibleLabel className="mt-4 text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </CollapsibleLabel>

      <div className="mt-20">
        <CollapsibleLabel className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </CollapsibleLabel>

        <div className="mt-5 space-y-4">
          <Field
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            inputClassName="border border-[#a5adad]"
          />
          <Field
            label="Design URL"
            placeholder="https://www.figma.com/file/"
            inputClassName="border-2 border-[#929291]"
          />
        </div>

        <div className="mt-8 flex gap-[17px]">
          {["Awesome", "Prepare"].map((label) => (
            <button
              key={label}
              type="button"
              className={actionButtonClassName}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
