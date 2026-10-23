import { useId } from "react";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[430px] rounded bg-[#1e1e1e] p-6 font-primary text-[15px] text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[22px]">UI magician Agent</h2>
      <IoSettingsOutline
        aria-hidden="true"
        size={22}
        className="text-[#c9c9c9]"
      />
    </div>

    <div className="mt-5 flex items-center gap-2 text-[#a8a8a8]">
      <IoChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <IoChevronUp aria-hidden="true" size={22} className="shrink-0" />
      <h3 className="font-primary-bold text-[22px]">Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-10 flex gap-[34px]">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[168px] rounded-md bg-[#8f3d1a] py-5 text-[16px] text-[#c9b6ae]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-[24px] text-[#dcdcdc]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => {
  const id = useId();

  return (
    <div className="mt-7">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="text-[16px] text-[#cfcfcf]">
          {label}
        </label>
        <IoInformationCircleOutline
          aria-hidden="true"
          size={18}
          className="text-[#c9c9c9]"
        />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="mt-3 w-full rounded-sm border border-[#9a9a9a] bg-[#1e1e1e] px-4 py-4 text-[15px] text-[#e6e6e6] placeholder:text-[#8b8b8b]"
      />
    </div>
  );
};

interface FieldProps {
  label: string;
  placeholder: string;
}
