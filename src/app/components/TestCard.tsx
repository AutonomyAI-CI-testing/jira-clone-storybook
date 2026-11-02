import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

const fieldClass =
  "mt-3 w-full rounded-[3px] border border-[#8c8c8c] bg-[#232323] px-4 py-3 text-[16px] text-[#d9d9d9] placeholder:text-[#7e7e7e]";

const buttonClass =
  "w-[168px] rounded-[8px] bg-[#9e4a1b] py-[18px] text-[19px] text-[#b5b5b5] hover:bg-[#8a3f16]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="text-[20px]">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded text-[#d9d9d9] hover:bg-[#2a2a2a]"
      >
        <MdOutlineSettings aria-hidden size={26} />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-2 text-[17px] text-[#a0a0a0]">
      <MdKeyboardArrowUp aria-hidden size={22} className="shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-32 flex items-center gap-2 text-[20px] text-[#c9c9c9]">
      <MdKeyboardArrowUp aria-hidden size={26} className="shrink-0" />
      <h3>Add New Design</h3>
    </div>

    <Field
      className="mt-14"
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-8"
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="ml-12 mt-20 flex gap-9">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 text-[19px] text-[#c9c9c9]">Recent Breakdowns</h3>
  </div>
);

const Field = ({
  className,
  id,
  label,
  placeholder,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[17px] text-[#b0b0b0]">
        {label}
      </label>
      <MdOutlineInfo aria-hidden size={22} className="text-[#c9c9c9]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={fieldClass}
    />
  </div>
);

interface FieldProps {
  className?: string;
  id: string;
  label: string;
  placeholder: string;
}
