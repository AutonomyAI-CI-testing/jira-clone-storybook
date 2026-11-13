import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const LabeledField = ({ label, placeholder }: LabeledFieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="font-primary">{label}</span>
      <HiOutlineInformationCircle size={18} className="shrink-0 text-[#c8c8c8]" />
    </div>
    <input
      placeholder={placeholder}
      className="w-full rounded border border-[#8a8a8a] bg-[#1f1f1f] px-3 py-3 font-primary text-[#e6e6e6] placeholder:text-[#8a8a8a]"
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="rounded border border-[#c0561f] bg-[#a63f12] px-7 py-3 font-primary text-[#8f8f8f] transition-colors duration-200 ease-in-out hover:bg-[#b8471a] active:bg-[#93370f]"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#141414] px-10 py-8 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiOutlineCog size={26} className="shrink-0 text-[#c8c8c8]" />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <HiChevronUp size={20} className="shrink-0 text-[#c8c8c8]" />
      <span className="truncate font-primary-light text-[#9e9e9e]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <HiChevronUp size={20} className="shrink-0 text-[#c8c8c8]" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <LabeledField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <LabeledField
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-4">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

interface LabeledFieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
