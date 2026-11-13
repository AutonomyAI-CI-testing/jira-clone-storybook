import type { ReactNode } from "react";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={id} className="text-[15px] text-[#a9a9a9]">
        {label}
      </label>
      <HiOutlineInformationCircle
        size={22}
        className="shrink-0 text-[#c9c9c9]"
        aria-hidden
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[68px] w-full rounded-[4px] border border-[#6f6f6f] bg-[#2b2b2b] px-4 text-[15px] text-[#8f8f8f] placeholder:text-[#8f8f8f]"
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="h-[76px] w-[170px] rounded-[8px] bg-[#a83c12] text-[17px] text-[#c9c9c9]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#141414] px-[38px] pb-24 pt-10 font-primary text-[#b9b9b9]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-[21px] leading-tight text-[#d7d7d7]">
        UI magician Agent
      </h2>
      <HiOutlineCog size={26} className="shrink-0 text-[#c9c9c9]" aria-hidden />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <HiOutlineChevronUp
        size={16}
        className="shrink-0 text-[#e6e6e6]"
        aria-hidden
      />
      <span className="truncate text-[15px] text-[#9c9c9c]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <HiOutlineChevronUp
        size={18}
        className="shrink-0 text-[#e6e6e6]"
        aria-hidden
      />
      <h3 className="font-primary-bold text-[20px] leading-tight text-[#d7d7d7]">
        Add New Design
      </h3>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-9 pl-[50px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h3 className="mt-24 font-primary-bold text-[20px] leading-tight text-[#d7d7d7]">
      Recent Breakdowns
    </h3>
  </div>
);
