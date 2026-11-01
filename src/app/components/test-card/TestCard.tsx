import { FaChevronUp } from "react-icons/fa";
import { FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] p-10 font-primary"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-[22px] leading-none text-white">UI magician Agent</h2>
        <FiSettings size={28} className="text-white" aria-hidden />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[var(--Neutral500)]">
        <FaChevronUp size={14} aria-hidden />
        <span className="truncate text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-40 flex items-center gap-3">
        <FaChevronUp size={18} className="text-white" aria-hidden />
        <h3 className="text-[22px] leading-none text-white">Add New Design</h3>
      </div>

      <div className="mt-12 space-y-8">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-16 flex gap-9 pl-12">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h3 className="mt-24 text-[22px] leading-none text-white">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-base text-white">{label}</span>
      <FiInfo size={22} className="text-white" aria-hidden />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded border border-[var(--Neutral400)] bg-transparent px-4 py-4 font-primary-light text-base text-white placeholder:text-[var(--Neutral500)]"
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[72px] w-[170px] rounded-md bg-[#a84a24] text-[17px] text-[#c9c9c9]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: string;
}
