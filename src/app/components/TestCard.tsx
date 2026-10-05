import cx from "classix";
import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 py-12 text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-[26px] leading-none">
          UI magician Agent
        </h1>
        <MdOutlineSettings
          aria-hidden="true"
          className="h-7 w-7 text-[#d8d8d8]"
        />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <ChevronUp />
        <span className="truncate font-primary text-[17px] text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <ChevronUp />
        <h2 className="font-primary-black text-[24px] leading-none">
          Add New Design
        </h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-24 flex justify-center gap-9">
        <CardButton label="Awesome" className="w-[175px]" />
        <CardButton label="Prepare" className="w-[170px]" />
      </div>

      <h2 className="mt-20 font-primary-black text-[22px] leading-none">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = () => {
  return (
    <MdKeyboardArrowUp
      aria-hidden="true"
      className="h-6 w-6 shrink-0 text-[#c8c8c8]"
    />
  );
};

const Field = ({ label, placeholder }: FieldProps) => {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[19px] text-[#b4b4b4]">{label}</span>
        <MdOutlineInfo
          aria-hidden="true"
          className="h-6 w-6 shrink-0 text-[#c8c8c8]"
        />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-4 h-[58px] w-full border border-[#6a6a6a] bg-[#2b2b2b] px-7 font-primary-light text-[17px] text-[#e8e8e8] placeholder:text-[#8a8a8a]"
      />
    </div>
  );
};

const CardButton = ({ label, className }: CardButtonProps) => {
  return (
    <button
      type="button"
      className={cx(
        "h-[62px] rounded bg-[#a3491c] font-primary text-[17px] text-[#e0d5cc]",
        className
      )}
    >
      {label}
    </button>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  label: string;
  className: string;
}
