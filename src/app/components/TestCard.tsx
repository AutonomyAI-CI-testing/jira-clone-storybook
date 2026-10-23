import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="mt-6">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[17px] font-primary-bold text-[#c4c4c4]"
      >
        {label}
      </label>
      <FiInfo aria-hidden="true" className="size-[18px] text-[#9a9a9a]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 h-[60px] w-full rounded border border-[#5a5a5a] bg-[#242424] px-4 text-[17px] font-primary-light text-[#c4c4c4] placeholder:text-[#7a7a7a]"
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-6 py-8 font-primary text-[#c4c4c4]"
  >
    <header className="flex items-center justify-between">
      <h1 className="text-[22px] font-primary-bold text-[#c4c4c4]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-[#c4c4c4]"
      >
        <FiSettings aria-hidden="true" className="size-6" />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" className="size-[18px]" />
      <p className="truncate text-[17px] font-primary-light text-[#9a9a9a]">
        From entire frame to a singl…
      </p>
    </div>

    <h2 className="mt-[130px] flex items-center gap-3 text-[24px] font-primary-bold text-[#c4c4c4]">
      <FiChevronUp aria-hidden="true" className="size-[22px]" />
      Add New Design
    </h2>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex gap-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded-md bg-[#9c3d1a] px-8 py-3 text-[17px] font-primary-bold text-[#a89a92] hover:bg-[#8a3517]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-[90px] text-[22px] font-primary-bold text-[#c4c4c4]">
      Recent Breakdowns
    </h2>
  </div>
);
