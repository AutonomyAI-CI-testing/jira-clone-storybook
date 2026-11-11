import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  label: string;
  placeholder: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <span className="text-[#c9c9c9]">{label}</span>
      <FiInfo size={26} aria-hidden className="shrink-0 text-[#c9c9c9]" />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-4 h-[70px] w-full rounded border border-[#8a8a8a] bg-[#242424] px-5 text-[#e8e8e8] placeholder:text-[#6f6f6f]"
    />
  </div>
);

const actionLabels = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1d1d1d] px-10 py-8 font-primary text-[#eeeeee]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FiSettings size={26} aria-hidden className="shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#9a9a9a]">
      <FiChevronUp size={24} aria-hidden className="shrink-0" />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-20">
      <div className="flex items-center gap-3">
        <FiChevronUp size={24} aria-hidden className="shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-14">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-10">
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-12 flex justify-center gap-8">
        {actionLabels.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[68px] w-[171px] rounded-lg bg-[#a03e1e] text-lg text-[#8b8b8b]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
