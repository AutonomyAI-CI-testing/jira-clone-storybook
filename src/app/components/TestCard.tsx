import type { ReactNode } from "react";

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg aria-hidden="true" viewBox="0 0 12 8" fill="none" className={className}>
    <path
      d="M1.2 6.8 6 1.6l4.8 5.2"
      stroke="#8b9291"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 15 15"
    fill="none"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#a4a4a3" strokeWidth="1.4" />
    <path
      d="M7.5 6.8v3.9"
      stroke="#a4a4a3"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="#a4a4a3" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    className="h-4 w-[14px] shrink-0"
  >
    <circle cx="12" cy="12" r="3.4" stroke="#b5b5b5" strokeWidth="2" />
    <path
      d="M12 2.4v2.6M12 19v2.6M2.4 12H5M19 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9"
      stroke="#b5b5b5"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

interface FieldProps {
  label: string;
  value: string;
  valueClassName: string;
  boxClassName: string;
}

const Field = ({
  label,
  value,
  valueClassName,
  boxClassName,
}: FieldProps): JSX.Element => (
  <div className="mt-3">
    <div className="flex items-center gap-[10px]">
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div
      className={`mt-3 flex w-full items-center bg-[#272822] px-[18px] ${boxClassName}`}
    >
      <span className={`truncate font-semibold ${valueClassName}`}>{value}</span>
    </div>
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#1C1D17] px-5 pt-5 pb-[62px] font-sans">
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[9px] py-[15px]">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxxxxxx"
      valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
      boxClassName="h-9 border border-[#a5adad]"
    />

    <Field
      label="Design URL"
      value="https://www.figma.com/file/"
      valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
      boxClassName="h-[37px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] ml-6 flex gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
