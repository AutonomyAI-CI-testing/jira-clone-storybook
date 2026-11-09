import { FaCog } from "react-icons/fa";
import { FiChevronUp, FiInfo } from "react-icons/fi";

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const TextField = ({ id, label, placeholder, className }: TextFieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[#c8c8c8]">
        {label}
      </label>
      <FiInfo aria-hidden="true" className="text-xl text-[#e0e0e0]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="mt-4 h-12 w-full rounded border border-[#6e6e6e] bg-[#2b2b2b] pl-10 pr-4 text-[#c8c8c8] placeholder:text-[#8a8a8a] focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-10 py-12 font-primary text-base text-[#d8d8d8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FaCog aria-hidden="true" className="text-2xl text-[#e0e0e0]" />
    </div>

    <div className="mt-7 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-xl text-[#e0e0e0]"
      />
      <p className="min-w-0 flex-1 truncate text-[#9e9e9e]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-2xl text-[#e0e0e0]"
      />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <TextField
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-12"
    />

    <TextField
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-5"
    />

    <div className="mt-10 flex gap-9">
      {["Awesome", "Prepare"].map((action) => (
        <button
          key={action}
          type="button"
          className="h-12 w-[170px] rounded-lg bg-[#9c4715] text-lg text-[#c9c9c9]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-28 font-primary-bold text-xl text-[#c0c0c0]">
      Recent Breakdowns
    </h2>
  </div>
);
