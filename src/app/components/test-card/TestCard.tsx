import type { ReactNode } from "react";
import cx from "classix";

const ChevronUp = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 10 6" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 5 5 1l4 4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84a.48.48 0 0 0-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M11 7h2v2h-2V7Zm0 4h2v6h-2v-6Zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z" />
  </svg>
);

const FieldLabel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={cx("flex items-center gap-2", className)}>
    <span className="text-[11.5px] leading-[13.92px]">{children}</span>
    <InfoIcon className="h-[15px] w-[15px]" />
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

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] pb-[62px] pl-5 pr-[23px] pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
      <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <FieldLabel className="mt-[28px] text-[#a4a4a3]">
      Personal Access Token
    </FieldLabel>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <FieldLabel className="mt-3 text-[#a3a3a2]">Design URL</FieldLabel>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
