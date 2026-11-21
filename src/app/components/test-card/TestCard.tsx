import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const inputClasses =
  "w-full rounded border border-[#5c5c5c] bg-[#161616] px-4 py-3.5 font-primary text-[17px] text-[#e8e8e8] placeholder:text-[#8a8a8a]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-3 font-primary text-[17px] text-[#cfcfcf]">
      {label}
      <HiOutlineInformationCircle
        aria-hidden="true"
        className="text-[#d0d0d0]"
        size={20}
      />
    </span>
    <input className={inputClasses} placeholder={placeholder} />
  </label>
);

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 py-8">
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[22px] leading-7 text-[#e8e8e8]">
        UI magician Agent
      </h2>
      <HiOutlineCog
        aria-hidden="true"
        className="shrink-0 text-[#d0d0d0]"
        size={26}
      />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#9b9b9b]"
        size={20}
      />
      <span className="truncate font-primary text-[17px] text-[#9b9b9b]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[#e8e8e8]"
        size={24}
      />
      <h3 className="font-primary-bold text-[24px] leading-8 text-[#e8e8e8]">
        Add New Design
      </h3>
    </div>

    <div className="mt-10 flex flex-col gap-10">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-14 flex gap-9 pl-12">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded-lg bg-[#a83e17] px-10 py-[22px] font-primary text-[20px] text-[#cf8f6f]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-[22px] leading-7 text-[#e8e8e8]">
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
