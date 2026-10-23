import {
  HiOutlineChevronUp,
  HiOutlineCog6Tooth,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-9 py-10 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[22px] leading-7">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#e8e8e8] transition-colors duration-100 hover:text-white"
      >
        <HiOutlineCog6Tooth aria-hidden size={26} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <HiOutlineChevronUp aria-hidden size={22} className="shrink-0" />
      <span className="truncate text-[18px] text-[#b0b0b0]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <HiOutlineChevronUp aria-hidden size={26} className="shrink-0" />
      <h3 className="font-primary-bold text-[22px] leading-7">Add New Design</h3>
    </div>

    <div className="mt-10 flex flex-col gap-10">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9 pl-10">
      <button
        type="button"
        className="h-[54px] w-[170px] rounded-[3px] bg-[#9c3f1e] text-[18px] text-[#e8c4b0] transition-colors duration-100 hover:bg-[#b04a24]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[54px] w-[170px] rounded-[3px] bg-[#9c3f1e] text-[18px] text-[#e8c4b0] transition-colors duration-100 hover:bg-[#b04a24]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-28 font-primary-bold text-[24px] leading-8 text-[#9a9a9a]">
      Recent Breakdowns
    </h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex items-center gap-5">
      <label htmlFor={id} className="text-[17px] text-[#d5d5d5]">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={26}
        className="shrink-0 text-[#e8e8e8]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-5 h-[50px] w-full rounded-[3px] border border-[#555] bg-[#2a2a2a] px-4 text-[17px] text-[#e8e8e8] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
