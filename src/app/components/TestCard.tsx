import type { ReactNode } from "react";

/**
 * Smoke-test component. Reproduces the dark "UI magician Agent" settings panel
 * from the referenced Figma frame as a single self-contained file: no props,
 * no state, all content inline. Visuals are deliberately approximate.
 */
const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.4" />
    <path d="M12 2.6v3.1M12 18.3v3.1M2.6 12h3.1M18.3 12h3.1M5.4 5.4l2.2 2.2M16.4 16.4l2.2 2.2M18.6 5.4l-2.2 2.2M7.6 16.4l-2.2 2.2" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.3v3.9" />
    <circle cx="8" cy="4.9" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
    <span>{children}</span>
    <InfoIcon className="h-[15px] w-[15px]" />
  </div>
);

const Field = ({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) => (
  <input
    readOnly
    placeholder={placeholder}
    aria-label={placeholder}
    className={`h-[37px] w-full bg-[#272822] px-[19px] text-[11.5px] font-semibold text-[#737470] outline-none placeholder:text-[#737470] ${className}`}
  />
);

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-[family-name:Inter,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          UI magician Agent
        </span>
        <GearIcon className="h-4 w-[14px]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpIcon className="h-[5px] w-2" />
        <span className="text-[11.5px] font-semibold leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-2 w-3" />
        <span className="text-[13.5px] font-semibold leading-[16.34px]">
          Add New Design
        </span>
      </div>

      <div className="mt-7">
        <FieldLabel>Personal Access Token</FieldLabel>
        <Field
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[11px] border border-[#a5adad]"
        />
      </div>

      <div className="mt-7">
        <FieldLabel>Design URL</FieldLabel>
        <Field
          placeholder="https://www.figma.com/file/:"
          className="mt-[10px] border-2 border-[#929291]"
        />
      </div>

      <div className="mt-[23px] flex justify-center gap-[17px]">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
}
