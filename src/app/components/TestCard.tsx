import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const actionLabels = ["Awesome", "Prepare"];

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <span className="font-primary text-lg text-[#e6e6e6]">{label}</span>
      <IoInformationCircleOutline size={18} className="text-[#e6e6e6]" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-[#6f6f6f] bg-[#2b2b2b] px-4 py-3 font-primary text-base text-[#e6e6e6] placeholder:text-[#8c8c8c]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl text-white">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-white">
        <IoSettingsOutline size={24} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2">
      <IoChevronUpOutline size={20} className="shrink-0 text-white" />
      <span className="truncate font-primary text-base text-[#c8c8c8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-2">
      <IoChevronUpOutline size={26} className="shrink-0 text-white" />
      <h2 className="font-primary-black text-[28px] text-white">
        Add New Design
      </h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex justify-center gap-6">
      {actionLabels.map((label) => (
        <button
          key={label}
          type="button"
          className="h-16 w-[170px] rounded bg-[#a04a26] font-primary text-lg text-[#d9c2b8]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-16 font-primary-black text-2xl text-white">
      Recent Breakdowns
    </h2>
  </div>
);
