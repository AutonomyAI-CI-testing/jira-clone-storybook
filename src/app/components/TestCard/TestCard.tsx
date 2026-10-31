import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "testcard-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-3">
      <label htmlFor={id} className="text-[15px] text-[#c9c9c9]">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={18} className="text-[#c9c9c9]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-[52px] w-full rounded border border-[#b0b0b0] bg-[#2b2b2b] px-3 text-[15px] text-[#e6e6e6] placeholder:text-[#9a9a9a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="w-[400px] bg-[#1a1a1a] px-8 py-7 text-[#e6e6e6]"
    >
      <div className="flex items-start justify-between">
        <h1 className="text-[22px] font-bold">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#c9c9c9] hover:text-white"
        >
          <FiSettings aria-hidden="true" size={22} />
        </button>
      </div>

      <div className="mt-9 flex items-center gap-3">
        <FiChevronUp aria-hidden="true" size={20} className="shrink-0" />
        <span className="truncate text-[15px] text-[#a8a8a8]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <FiChevronUp aria-hidden="true" size={22} className="shrink-0" />
        <h2 className="text-[20px] font-bold">Add New Design</h2>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {FIELDS.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>

      <div className="mt-9 flex gap-8">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[56px] flex-1 rounded-md bg-[#a63d12] text-[17px] text-[#f2f2f2]"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-14 text-[19px] font-bold">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
