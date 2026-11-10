import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({ label, placeholder }: FieldProps) => (
  <label className="flex flex-col gap-3">
    <span className="flex items-center gap-2 text-sm text-[#c9c9c9]">
      {label}
      <FiInfo aria-hidden="true" className="text-[#9a9a9a]" size={16} />
    </span>
    <input
      className="h-16 w-full rounded border border-[#4d4d4d] bg-transparent px-4 text-sm text-[#d9d9d9] placeholder:text-[#8f8f8f] focus:outline-none"
      placeholder={placeholder}
    />
  </label>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 py-8 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <FiSettings aria-hidden="true" className="text-[#c9c9c9]" size={24} />
    </div>

    <div className="mt-4 flex items-center gap-2 text-sm text-[#8f8f8f]">
      <FiChevronUp aria-hidden="true" size={18} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-28 flex flex-col gap-8">
      <div className="flex items-center gap-2 font-primary-bold text-lg">
        <FiChevronUp aria-hidden="true" size={20} />
        <span>Add New Design</span>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-4">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-16 flex-1 rounded-md bg-[#a03c14] text-lg text-[#d9c2b8]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <div className="mt-24 font-primary-bold text-lg">Recent Breakdowns</div>
  </div>
);
