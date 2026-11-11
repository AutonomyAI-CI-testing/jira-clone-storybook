import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-[44px] pt-[38px] pb-[126px] font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px] text-[#a9a9a9]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center text-[#a3a3a3]"
      >
        <FiSettings aria-hidden size={24} />
      </button>
    </div>

    <div className="mt-[34px] flex items-center gap-[12px]">
      <FiChevronUp aria-hidden size={22} className="shrink-0 text-[#8f8f8f]" />
      <p className="truncate text-[16px] text-[#8f8f8f]">
        From entire frame to a singl…
      </p>
    </div>

    <div className="mt-[164px] flex items-center gap-[12px]">
      <FiChevronUp aria-hidden size={22} className="shrink-0 text-[#e8e8e8]" />
      <h2 className="font-primary-bold text-[20px] text-[#e8e8e8]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[64px] flex flex-col gap-[50px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file:" />
    </div>

    <div className="mt-[52px] flex justify-end gap-[34px]">
      <RustButton>Awesome</RustButton>
      <RustButton>Prepare</RustButton>
    </div>

    <h2 className="mt-[100px] font-primary-bold text-[20px] text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => {
  const id = `test-card-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex items-center gap-[10px]">
        <label htmlFor={id} className="text-[16px] text-[#b5b5b5]">
          {label}
        </label>
        <FiInfo aria-hidden size={18} className="shrink-0 text-[#a9a9a9]" />
      </div>
      <input
        id={id}
        readOnly
        placeholder={placeholder}
        className="h-[56px] w-full rounded-[4px] border border-[#5a5a5a] bg-[#2a2a2a] px-[16px] text-[16px] text-[#d0d0d0] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

const RustButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[48px] w-[168px] cursor-pointer rounded-[8px] bg-[#96421f] text-[16px] text-[#e6dedb] hover:bg-[#a84a23]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
