import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const canvas = "w-[508px] bg-[#1c1c1c] px-10 py-10 font-primary text-[#c9c9c9]";

const headingClass = "font-primary-black text-[20px] leading-tight";

const buttonClass =
  "w-[170px] rounded-[8px] bg-[#a8401a] px-6 py-3 text-center text-[16px] text-[#c4c4c4] transition-colors hover:bg-[#bd4b1f]";

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="block">
    <span className="flex items-center gap-2 text-[15px]">
      {label}
      <HiOutlineInformationCircle
        className="h-[18px] w-[18px] shrink-0"
        aria-hidden="true"
      />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded-[8px] border border-[#4d4d4d] bg-[#252525] px-4 py-3 font-primary-light text-[16px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </label>
);

export const TestCard = () => (
  <div id="testElem" className={canvas}>
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[18px] leading-tight">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="shrink-0">
        <HiOutlineCog className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <HiChevronUp className="h-5 w-5 shrink-0" aria-hidden="true" />
      <p className="truncate font-primary-light text-[15px]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <HiChevronUp className="h-6 w-6 shrink-0" aria-hidden="true" />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <div className="mt-7 flex flex-col gap-5">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-7 flex justify-center gap-9">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 ${headingClass}`}>Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
