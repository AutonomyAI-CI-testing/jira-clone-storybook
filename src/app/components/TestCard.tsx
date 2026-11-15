import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  { label: "Personal Access Token", placeholder: "figd_xxxxxxxxxxxxxxxxxxxx" },
  { label: "Design URL", placeholder: "https://www.figma.com/file/" },
];

const ACTIONS = ["Awesome", "Prepare"];

const TestField = ({ label, placeholder }: TestFieldProps) => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-2 text-sm text-[#cfcfcf]">
      {label}
      <FiInfo aria-hidden size={18} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="h-[52px] w-full rounded border border-[#4d4d4d] bg-[#2b2b2b] px-3.5 text-sm text-[#ededed] placeholder:text-[#8c8c8c]"
    />
  </label>
);

const TestButton = ({ label }: TestButtonProps) => (
  <button
    type="button"
    className="h-[62px] w-[170px] rounded-md bg-[#a3401a] text-lg text-[#cfcfcf]"
  >
    {label}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pt-9 pb-12 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl text-[#ededed]">
        UI magician Agent
      </span>
      <FiSettings aria-hidden size={22} className="text-[#d0d0d0]" />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp aria-hidden size={18} className="shrink-0 text-[#cfcfcf]" />
      <span className="truncate text-sm text-[#cfcfcf]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp aria-hidden size={20} className="shrink-0 text-[#ededed]" />
      <span className="font-primary-bold text-lg text-[#ededed]">
        Add New Design
      </span>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map((field) => (
        <TestField key={field.label} {...field} />
      ))}
    </div>

    <div className="mt-14 flex justify-center gap-9">
      {ACTIONS.map((action) => (
        <TestButton key={action} label={action} />
      ))}
    </div>

    <span className="mt-24 font-primary-bold text-lg text-[#ededed]">
      Recent Breakdowns
    </span>
  </div>
);

interface TestFieldProps {
  label: string;
  placeholder: string;
}

interface TestButtonProps {
  label: string;
}
