import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-3 w-full rounded-[3px] border border-[#5a5a5a] bg-[#242424] px-5 py-4 text-[#8a8a8a] placeholder:text-[#8a8a8a]";

const buttonClass =
  "h-[72px] w-[168px] rounded-md bg-[#8a3d16] text-lg text-[#9b8b80]";

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-10">
    <label htmlFor={id} className="flex items-center gap-2 text-[#c7c7c7]">
      {label}
      <FiInfo className="h-5 w-5" />
    </label>
    <input id={id} placeholder={placeholder} className={fieldClass} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-9 font-primary text-[#c7c7c7]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings className="h-6 w-6" />
    </div>

    <div className="mt-7 flex items-center gap-3 text-[#8a8a8a]">
      <FiChevronUp className="h-4 w-4 shrink-0" />
      <span className="min-w-0 flex-1 truncate">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp className="h-5 w-5" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <Field
      id="testElem-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="testElem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex gap-9 pl-12">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
