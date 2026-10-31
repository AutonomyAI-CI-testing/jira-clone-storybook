import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Field = ({ label, placeholder }: Props) => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[16px] text-[#a3a3a3]">{label}</span>
      <IoInformationCircleOutline
        size={20}
        aria-hidden="true"
        className="text-[#a3a3a3]"
      />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-3 h-16 w-full rounded-sm border border-[#6e6e6e] bg-[#2b2b2b] px-5 text-[17px] text-[#e6e6e6] placeholder:text-[#8c8c8c]"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[68px] w-[170px] rounded-md bg-[#a84a24] text-[17px] text-[#f5ece8] transition-colors hover:bg-[#b85427] active:bg-[#93401f]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 pb-16 pt-12 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[19px] text-[#d9d9d9]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-[#a3a3a3] transition-colors hover:text-[#e6e6e6]"
      >
        <IoSettingsOutline size={22} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-2 text-[17px] text-[#a3a3a3]">
      <IoChevronUp size={18} aria-hidden="true" className="shrink-0" />
      <span className="min-w-0 truncate">
        From entire frame to a single component
      </span>
    </div>

    <div className="h-[150px]" aria-hidden="true" />

    <div className="flex items-center gap-2">
      <IoChevronUp size={24} aria-hidden="true" className="text-[#e6e6e6]" />
      <h3 className="font-primary-bold text-[22px] text-[#e6e6e6]">
        Add New Design
      </h3>
    </div>

    <div className="mt-10">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-12 flex gap-8 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h3 className="mt-24 font-primary-bold text-[22px] text-[#e6e6e6]">
      Recent Breakdowns
    </h3>
  </div>
);

interface Props {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
